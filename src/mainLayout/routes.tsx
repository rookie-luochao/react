import { MainLayout } from "./index";
import { pagesRoutes } from "../pages/routes";

export const mainLayoutPath = "main";
export const mainLayoutFullPath = `/${mainLayoutPath}`;

export const mainRoutes = {
  path: mainLayoutPath,
  element: <MainLayout />,
  children: pagesRoutes,
};
