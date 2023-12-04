import { mainLayoutPath } from "../mainLayout/routes";
import { dashboardModuleName } from "../pages/dashboard/routes";

export const defaultLinkPath = `/${mainLayoutPath}/${dashboardModuleName}`;

export const defaultUserInfo = {
  username: "admin",
  password: "adminadmin",
};

export const defaultLoginInfo = {
  accessToken: "123456",
  name: "张三",
};
