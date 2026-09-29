import { createRouter, createRootRoute, createRoute, lazyRouteComponent } from "@tanstack/react-router";

const rootRoute = createRootRoute();

const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: lazyRouteComponent(() => import("../components/frontend/dashbaord")),
});

const agreementRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/agreement",
    component: lazyRouteComponent(() => import("../argremment/AgreementPage")),
});

const projectRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/project",
    component: lazyRouteComponent(() => import("../components/frontend/project")),
});

const fourAgreementRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/agreement/step-2",
    component: lazyRouteComponent(() => import("../argremment/fourArgremment")),
});

const threeAgreementRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/agreement/step-3",
    component: lazyRouteComponent(() => import("../argremment/threeArgremment")),
});

const adminRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/admin/products",
    component: lazyRouteComponent(() => import("../components/admin/ProductAdmin")),
});

const saasRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/saas",
    component: lazyRouteComponent(() => import("../components/products")),
});

const routeTree = rootRoute.addChildren([dashboardRoute, agreementRoute, projectRoute, fourAgreementRoute, threeAgreementRoute, adminRoute, saasRoute]);
export const router = createRouter({ routeTree });

export default router;