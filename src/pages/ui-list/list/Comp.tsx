import React from "react";
import { map, reduce, findIndex, filter } from "lodash-es";
import { CSSObject } from "@emotion/react";
import { Checkbox } from "antd";
import { IFormatter, IListProps } from "./type";
import { Dictionary } from "react-router-toolkit";

const flexRowStyle: CSSObject = {
  display: "flex",
  flexWrap: "wrap",
  flex: 1,
};

const rowItemStyle: CSSObject = {
  display: "flex",
  alignItems: "center",
  marginBottom: "4px",
};

const listRowStyle: CSSObject = {
  display: "flex",
  padding: "1.2em 0.8em",
  backgroundColor: "#fff",
};

export function List<T extends Dictionary<any>>(
  props: IListProps<T> & {
    titleRender: (rowData: T) => React.ReactNode;
    operateRender: (rowData: T) => React.ReactNode;
  },
) {
  const {
    dataSource,
    sortedKeyConfig,
    rowId,
    displayLabel,
    formatters = {} as IFormatter<T>,
    onRowSelectChange,
    showRowSelectBar = false,
    activeRowId,
    onRowClick,
    contentStyle,
    titleRender,
    operateRender,
  } = props;
  const defaultFormatKeyName = (v: keyof T) => v || "-";
  const borderRadius = 10;

  const getNewList = (props: { rowData: T; isChecked: boolean }) => {
    const { rowData, isChecked } = props;
    const newItem = { ...rowData, isChecked: !!isChecked };
    const index = findIndex(dataSource, (listItem) => listItem[rowId] === rowData[rowId]);
    dataSource.splice(index, 1, newItem);
    onRowSelectChange && onRowSelectChange([...dataSource]);
  };

  const selectedDataSource = filter(dataSource, (item) => !!item.isChecked);

  return (
    <div>
      {onRowSelectChange && showRowSelectBar && (
        <div
          css={{
            marginBottom: 8,
            padding: "12px 24px",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#e6f7ff",
            border: "1px solid #91d5ff",
            borderRadius: 10,
          }}>
          <div>已选择&nbsp;{selectedDataSource.length}&nbsp;项</div>
          <div>
            {selectedDataSource.length !== dataSource.length && (
              <a
                css={{ marginRight: 6 }}
                onClick={() => {
                  onRowSelectChange(
                    map(dataSource, (item) => ({
                      ...item,
                      isChecked: true,
                    })),
                  );
                }}>
                全选
              </a>
            )}
            {selectedDataSource.length > 0 && (
              <a
                onClick={() => {
                  onRowSelectChange(
                    map(dataSource, (item) => ({
                      ...item,
                      isChecked: false,
                    })),
                  );
                }}>
                取消选择
              </a>
            )}
          </div>
        </div>
      )}
      <div css={contentStyle}>
        {map(dataSource, (item) => (
          <div
            key={item[rowId]}
            css={[
              { backgroundColor: "rgba(238, 242, 249, 0.85)", borderRadius: borderRadius, padding: 8, marginBottom: 8 },
              activeRowId && activeRowId === item[rowId]
                ? { border: "1px solid #1890ff", borderRadius: borderRadius }
                : {},
              onRowClick ? { cursor: "pointer" } : {},
            ]}>
            <div>
              <div
                css={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                  padding: "0em 0.8em",
                }}>
                <h3>{titleRender(item)}</h3>
                <div>{operateRender(item)}</div>
              </div>
              <div
                onClick={() => {
                  onRowClick && activeRowId !== item[rowId] && onRowClick(item[rowId]);
                }}
                css={listRowStyle}>
                {onRowSelectChange && (
                  <Checkbox
                    checked={item.isChecked}
                    onChange={(e) => {
                      getNewList({ rowData: item, isChecked: e.target.checked });
                    }}
                    style={{ marginRight: 12, marginTop: 2, display: "inline" }}
                  />
                )}
                <div css={[flexRowStyle, { borderRadius: borderRadius }]}>
                  {map(sortedKeyConfig, (keyConfig, index) => {
                    const {
                      keyName,
                      isDisplayKeyName = true,
                      rowItemPercent = 100,
                      rowItemKeyNamePercent,
                      keyNameStyle,
                      valueStyle,
                      isValueHighLight = false,
                      flexAdaptiveRelativeDistance = 0,
                      noMargin = false,
                    } = keyConfig;
                    const formatter = formatters[keyName];
                    const value = item[keyName];
                    let restFlexBasis = 0;
                    const label = (displayLabel ? displayLabel(keyName) || keyName : defaultFormatKeyName(keyName)) as string;

                    const basicKeyStyle: CSSObject = {
                      opacity: 0.4,
                      width: rowItemKeyNamePercent ? `${rowItemKeyNamePercent}%` : "auto",
                    };

                    const basicValueStyle: CSSObject = {
                      opacity: isDisplayKeyName || isValueHighLight ? 1 : 0.4,
                      wordBreak: "break-all",
                      flex: 1,
                    };

                    if (flexAdaptiveRelativeDistance) {
                      const flexBasisTotal = reduce(
                        sortedKeyConfig.slice(index - flexAdaptiveRelativeDistance, index),
                        (pre, cItem) => pre + (cItem.rowItemPercent || 0),
                        0,
                      );
                      restFlexBasis = 100 - flexBasisTotal;
                    }

                    return (
                      <div
                        key={keyName as string}
                        css={[
                          rowItemStyle,
                          flexAdaptiveRelativeDistance
                            ? { flexBasis: `${restFlexBasis}%` }
                            : { flexBasis: `${rowItemPercent}%` },
                          noMargin ? { margin: 0 } : {},
                        ]}>
                        {isDisplayKeyName && (
                          <div css={[basicKeyStyle, keyNameStyle]}>
                            {label}：
                          </div>
                        )}
                        <div css={[basicValueStyle, valueStyle]}>{formatter ? formatter(value, item) : value}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
