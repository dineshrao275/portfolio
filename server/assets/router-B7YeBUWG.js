import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-CB1TKSKE.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-gradient", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Signal lost" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "This coordinate doesn't exist in the grid." }),
    /* @__PURE__ */ jsx(Link, { to: "/", className: "mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground", children: "Return home" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: "Something glitched" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Try again or head home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-2 justify-center", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => {
        router.invalidate();
        reset();
      }, className: "rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground", children: "Try again" }),
      /* @__PURE__ */ jsx("a", { href: "/", className: "rounded-md border px-4 py-2 text-sm", children: "Home" })
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dinesh Rao — PHP Laravel Developer" },
      { name: "description", content: "Portfolio of Dinesh Rao, PHP Laravel Developer crafting scalable web apps and APIs." },
      { name: "author", content: "Dinesh Rao" },
      { property: "og:title", content: "Dinesh Rao — PHP Laravel Developer" },
      { property: "og:description", content: "Portfolio of Dinesh Rao, PHP Laravel Developer crafting scalable web apps and APIs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dinesh Rao — PHP Laravel Developer" },
      { name: "twitter:description", content: "Portfolio of Dinesh Rao, PHP Laravel Developer crafting scalable web apps and APIs." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f0cd5f1d-0547-4b41-a24c-c7caae37aca6/id-preview-9f909b3b--89e30345-7ef9-4bfd-8fdc-1cab0a1af4bf.lovable.app-1781025216244.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f0cd5f1d-0547-4b41-a24c-c7caae37aca6/id-preview-9f909b3b--89e30345-7ef9-4bfd-8fdc-1cab0a1af4bf.lovable.app-1781025216244.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter = () => import("./index-BHxcEuuw.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Dinesh Rao — PHP Laravel Developer Portfolio"
    }, {
      name: "description",
      content: "Cinematic portfolio of Dinesh Rao — PHP Laravel Developer in Indore, India. 3 years building scalable web apps, REST APIs, and franchise platforms."
    }, {
      property: "og:title",
      content: "Dinesh Rao — PHP Laravel Developer"
    }, {
      property: "og:description",
      content: "Cinematic portfolio of a Laravel developer crafting scalable backends and APIs."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
