import { ListPage } from "./list";
import { MarkdownCodePage } from "./markdown";
import { DragTablePage } from "./table";

export const uiListModuleName = "ui-list";

export const uiListRoutes = {
  path: uiListModuleName,
  id: "UI组件",
  children: [
    {
      path: "table",
      id: "拖拽列排序表格",
      element: <DragTablePage />,
    },
    {
      path: "list",
      id: "列表",
      element: <ListPage />,
    },
    {
      path: "markdown",
      id: "代码块",
      element: <MarkdownCodePage />,
    },
  ],
};
