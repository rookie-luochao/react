import { ColorPage } from "./color";
import { URLEncodePage } from "./encode";
import { RequestPage } from "./request";
import { UUIDPage } from "./uuid";

export const utilListModuleName = "util-list";

export const utilListRoutes = {
  path: utilListModuleName,
  id: "工具",
  children: [
    {
      path: "encode",
      id: "URL Encode",
      element: <URLEncodePage />,
    },
    {
      path: "color",
      id: "颜色转换器",
      element: <ColorPage />,
    },
    {
      path: "uuid",
      id: "UUID生成器",
      element: <UUIDPage />,
    },
    {
      path: "request",
      id: "请求示例",
      element: <RequestPage />,
    },
  ],
};
