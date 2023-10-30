import { Navigate, RouteObject } from "react-router-dom";
import { loginFullPath, loginRoutes } from "./login/routes";
import { mainRoutes } from "./mainLayout/routes";
import { ErrorBoundaryWrapOutlet } from "./core/error-boundary";

function getAppRoutes() {
  return [
    {
      path: "",
      element: <ErrorBoundaryWrapOutlet />,
      children: [
        {
          index: true,
          element: <Navigate to={loginFullPath} />,
        },
        loginRoutes,
        mainRoutes,
      ],
    },
  ] as RouteObject[];
}

export const appRoutes = getAppRoutes();
