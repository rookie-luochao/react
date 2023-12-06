import { Card } from "antd";
import { displayPerson, usePersonInfoList } from "../../../mock";
import SourceCodeUrlComp from "../../../core/github";
import { List } from "./Comp";
import { IListRecordItemConfig } from "./type";
import { IPerson } from "../../../mock/interface";
import { dsc } from "../../../core/style/defaultStyleConfig";
import { useState } from "react";

export function ListPage() {
  const allPersonInfos = usePersonInfoList(1);
  const [persons, setPersons] = useState([...allPersonInfos] as IPerson[]);
  const [activeId, setActiveId] = useState(persons[0].id);

  const sortedKeyConfig = [
    {
      keyName: "name",
      rowItemPercent: 25,
    },
    {
      keyName: "age",
      rowItemPercent: 25,
    },
    {
      keyName: "birthday",
      rowItemPercent: 25,
    },
    {
      keyName: "maritalStatus",
      flexAdaptiveRelativeDistance: 3,
    },
    {
      keyName: "height",
      rowItemPercent: 25,
    },
    {
      keyName: "weight",
      rowItemPercent: 25,
    },
    {
      keyName: "level",
      rowItemPercent: 25,
    },
    {
      keyName: "income",
      flexAdaptiveRelativeDistance: 3,
    },
    {
      keyName: "fatherName",
      rowItemPercent: 25,
    },
    {
      keyName: "fatherAge",
      rowItemPercent: 25,
    },
    {
      keyName: "fatherProfession",
      flexAdaptiveRelativeDistance: 2,
    },
    {
      keyName: "motherName",
      rowItemPercent: 25,
    },
    {
      keyName: "motherAge",
      rowItemPercent: 25,
    },
    {
      keyName: "motherProfession",
      flexAdaptiveRelativeDistance: 2,
    },
    {
      keyName: "birthplace",
      rowItemPercent: 100,
    },
    {
      keyName: "love",
      rowItemPercent: 100,
    },
  ] as IListRecordItemConfig<keyof IPerson>[];

  return (
    <div>
      <Card
        title="基本List"
        extra={
          <SourceCodeUrlComp />
        }
        bodyStyle={{ fontSize: dsc.fontSize.xs }}
      >
        <List
          dataSource={allPersonInfos}
          rowId="id"
          sortedKeyConfig={sortedKeyConfig}
          displayLabel={displayPerson}
          formatters={{
            income: (value: number) => {
              return `${value / 10000}(万元)`;
            },
            love: (values) => {
              return values?.join(", ");
            },
          }}
          titleRender={(item) => item.name}
          operateRender={() => (
            <div>
              <a css={{ marginRight: 4 }}>编辑</a>
              <a>删除</a>
            </div>
          )}
        />
      </Card>
      <Card
        title="带复选框的List"
        extra={
          <SourceCodeUrlComp />
        }
        bodyStyle={{ fontSize: dsc.fontSize.xs }}
      >
        <List
          dataSource={persons}
          rowId="id"
          sortedKeyConfig={sortedKeyConfig}
          displayLabel={displayPerson}
          formatters={{
            income: (value: number) => {
              return `${value / 10000}(万元)`;
            },
            love: (values) => {
              return values?.join(", ");
            },
          }}
          titleRender={(item) => item.name}
          operateRender={() => (
            <div>
              <a css={{ marginRight: 4 }}>编辑</a>
              <a>删除</a>
            </div>
          )}
          showRowSelectBar
          onRowSelectChange={(values) => {
            setPersons(values);
          }}
        />
      </Card>
      <Card
        title="可选中行数据的List"
        extra={
          <SourceCodeUrlComp />
        }
        bodyStyle={{ fontSize: dsc.fontSize.xs }}
      >
        <List
          dataSource={persons}
          rowId="id"
          sortedKeyConfig={sortedKeyConfig}
          displayLabel={displayPerson}
          formatters={{
            income: (value: number) => {
              return `${value / 10000}(万元)`;
            },
            love: (values) => {
              return values?.join(", ");
            },
          }}
          titleRender={(item) => item.name}
          operateRender={() => (
            <div>
              <a css={{ marginRight: 4 }}>编辑</a>
              <a>删除</a>
            </div>
          )}
          activeRowId={activeId}
          onRowClick={(id) => {
            setActiveId(id);
          }}
        />
      </Card>
    </div>
  )
}