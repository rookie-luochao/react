import { RequestPage } from "./request";
import { UUIDPage } from "./uuid";

export const utilListModuleName = "util-list";

export const utilListRoutes = {
  path: utilListModuleName,
  id: "工具",
  children: [
    {
      path: "request",
      id: "请求示例",
      element: <RequestPage />,
    },
    {
      path: "uuid",
      id: "UUID生成器",
      element: <UUIDPage />,
    },
  ],
};
