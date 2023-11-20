import { Navigate, RouteObject } from "react-router-dom";
import { loginRoutes } from "./login/routes";
import { mainRoutes } from "./mainLayout/routes";
import { ErrorBoundaryWrapOutlet } from "./core/error-boundary";
import { defaultLinkPath } from "./login/config";

function getAppRoutes() {
  return [
    {
      path: "",
      element: <ErrorBoundaryWrapOutlet />,
      children: [
        {
          index: true,
          element: <Navigate to={defaultLinkPath} />,
        },
        loginRoutes,
        mainRoutes,
      ],
    },
  ] as RouteObject[];
}

export const appRoutes = getAppRoutes();
