import { createRouter, createRootRoute, createRoute, lazyRouteComponent } from "@tanstack/react-router";

const rootRoute = createRootRoute();

const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: lazyRouteComponent(() => import("../components/frontend/dashbaord")),
});

const routeTree = rootRoute.addChildren([dashboardRoute]);

export const router = createRouter({ routeTree });

export default router;