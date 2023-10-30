import { lazy } from "react";

const Login = lazy(() => import("./index"));

export const loginFullPath = "login";

export const loginRoutes = {
  path: loginFullPath,
  id: "登录",
  element: <Login />,
};
