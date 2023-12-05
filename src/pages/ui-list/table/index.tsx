import { useState } from "react";
import { displayPersonBasicInfo } from "../../../mock/translate";
import { usePersonInfoList } from "../../../mock";
import { DragableTable } from "./Comp";
import { Card } from "antd";
import SourceCodeUrlComp from "../../../core/github";

const fixedColumns = [
  {
    title: "操作",
    dataIndex: "operate",
    width: 120,
    render() {
      return <span>操作列无法拖拽</span>;
    },
  },
];

const columns = [
  {
    index: 0,
    dataIndex: "name",
    title: displayPersonBasicInfo("name"),
    onHeaderCell(column: any) {
      return column;
    },
  },
  {
    index: 1,
    dataIndex: "age",
    title: displayPersonBasicInfo("age"),

    onHeaderCell(column: any) {
      return column;
    },
  },
  {
    index: 2,
    dataIndex: "height",
    title: displayPersonBasicInfo("height"),
    onHeaderCell(column: any) {
      return column;
    },
  },
  {
    index: 3,
    dataIndex: "weight",
    title: displayPersonBasicInfo("weight"),
    onHeaderCell(column: any) {
      return column;
    },
  },
  {
    index: 4,
    dataIndex: "level",
    title: displayPersonBasicInfo("level"),
    onHeaderCell(column: any) {
      return column;
    },
  },
  {
    index: 5,
    dataIndex: "maritalStatus",
    title: displayPersonBasicInfo("maritalStatus"),
    onHeaderCell(column: any) {
      return column;
    },
  },
  {
    index: 6,
    dataIndex: "income",
    title: displayPersonBasicInfo("income"),
    onHeaderCell(column: any) {
      return column;
    },
  },
  {
    index: 7,
    dataIndex: "birthplace",
    title: displayPersonBasicInfo("birthplace"),
    onHeaderCell(column: any) {
      return column;
    },
  },
];

export function DragTablePage() {
  const allPersonInfos = usePersonInfoList();
  const [fields, setFields] = useState(columns);

  return (
    <Card
      title="基于antd-table的可拖拽列排序表格"
      extra={
        <SourceCodeUrlComp />
      }
    >
      <DragableTable
        notDragableFields={fixedColumns}
        dragableFields={fields}
        dataSource={allPersonInfos}
        loading={false}
        rowKey="id"
        onDragableFieldsChange={(fields) => {
          setFields(fields);
        }}
      />
    </Card>
  );
}
