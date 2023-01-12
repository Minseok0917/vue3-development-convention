import { dynamicImportRoutes } from "@utils/utils.router";
import { routesHome } from "./routes.home";

export const routes = dynamicImportRoutes([...routesHome]);
