import { createBrowserRouter } from "react-router";
import { Suspense, lazy } from "react";
import PageSkeleton from "./components/PageSkeleton";
import RootLayout from "./components/RootLayout";

const Home = lazy(() => import("./pages/Home"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const ComponentShowcase = lazy(() => import("./pages/ComponentShowcase"));
const Contact = lazy(() => import("./pages/Contact"));
const Process = lazy(() => import("./pages/Process"));
const About = lazy(() => import("./pages/About"));

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<PageSkeleton variant="home" />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/components",
        element: (
          <Suspense fallback={<PageSkeleton variant="generic" />}>
            <ComponentShowcase />
          </Suspense>
        ),
      },
      {
        path: "/my-work",
        element: (
          <Suspense fallback={<PageSkeleton variant="generic" />}>
            <ComingSoon pageName="My Work" />
          </Suspense>
        ),
      },
      {
        path: "/process",
        element: (
          <Suspense fallback={<PageSkeleton variant="generic" />}>
            <Process />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<PageSkeleton variant="generic" />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/resume",
        element: (
          <Suspense fallback={<PageSkeleton variant="generic" />}>
            <ComingSoon pageName="Resume" />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<PageSkeleton variant="contact" />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<PageSkeleton variant="generic" />}>
            <ComingSoon pageName="404 - Page Not Found" />
          </Suspense>
        ),
      },
    ],
  },
]);