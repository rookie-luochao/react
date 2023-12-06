import { CSSObject } from "@emotion/react";
import { ReactNode } from "react";

export interface IRowWithIsChecked {
  isChecked?: boolean;
}

export type IFormatter<T> = {
  [key in keyof T]?: (data: T[key], record?: T) => ReactNode;
};

/*
* 字段配置属性
*/
export interface IListRecordItemConfig<K extends any> {
  // 字段key
  keyName: K;
  // 是否展示字段名称, 默认true, false就只展示字段值
  isDisplayKeyName?: boolean;
  // 字段占一行宽度的百分比
  rowItemPercent?: number;
  // 字段名称占 字段名称和字段值 的百分比
  rowItemKeyNamePercent?: number;
  // 自定义字段名称样式
  keyNameStyle?: CSSObject;
  // 自定义字段值样式
  valueStyle?: CSSObject;
  // 字段值是否高亮
  isValueHighLight?: boolean;
  // 当前字段距离行首字段间隔多少个字段，用于行收尾
  flexAdaptiveRelativeDistance?: number;
  // 是否有margin
  noMargin?: boolean;
}

/*
* 列表配置属性
*/
export interface IListProps<T> {
  // 数据源
  dataSource: Array<T & IRowWithIsChecked>;
  // 字段配置
  sortedKeyConfig: IListRecordItemConfig<keyof T>[]; // 可排序
  // 列表行的唯一id
  rowId: keyof T;
  // 字段key的翻译函数, 不传则展示英文key
  displayLabel?: (field: keyof T) => string;
  // 字段值的自定义渲染
  formatters?: IFormatter<T>;
  // 是否展示操作bar，用于批量选择，默认false
  showRowSelectBar?: boolean;
  // 处罚勾选或取消勾选的回调函数
  onRowSelectChange?: (allRowData: Array<T & IRowWithIsChecked>) => void;
  // 高亮某一行的id
  activeRowId?: string;
  // 行点击的回调函数
  onRowClick?: (activeRowId: string) => void;
  // 内容区域的样式
  contentStyle?: CSSObject;
}
