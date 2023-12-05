import { JsonHome } from ".";
import { DiffPage } from "./Diff";

export const jsonModuleName = "json";

export const jsonRoutes = {
  path: jsonModuleName,
  id: "JSON",
  children: [
    {
      path: "",
      id: "JSON格式化",
      element: <JsonHome />,
    },
    {
      path: "diff",
      id: "JSON差异化对比",
      element: <DiffPage />,
    },
  ],
};