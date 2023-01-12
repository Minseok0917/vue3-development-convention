const pages = import.meta.glob("@pages/**/*.vue");

export function dynamicImportRoute({ name, path, component, ...routeOptions }: any) {
  return {
    name,
    path,
    component: pages[`/src/pages/${component}.vue`],
    ...routeOptions,
  };
}
export function dynamicImportRoutes(routes: Array<Object>): any {
  return routes.map(dynamicImportRoute).map((route) => {
    route.children &&= dynamicImportRoutes(route.children);
    return route;
  });
}
