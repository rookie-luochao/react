import { JsonHome } from ".";

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
  ],
};