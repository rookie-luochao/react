import { jsonRoutes } from "./json/routes";
import { dashboardRoutes } from "./dashboard/routes";
import { uiListRoutes } from "./ui-list/routes";
import { utilListRoutes } from "./util-list/routes";

export const pagesRoutes = [dashboardRoutes, jsonRoutes, utilListRoutes, uiListRoutes];
