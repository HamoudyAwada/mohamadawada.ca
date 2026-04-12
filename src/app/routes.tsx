import { createBrowserRouter, Navigate } from "react-router";
import { Suspense, lazy, useEffect } from "react";
import PageSkeleton from "./components/PageSkeleton";
import RootLayout from "./components/RootLayout";

function ResumeRedirect() {
  useEffect(() => {
    window.open("/mohamad-awada-resume.pdf", "_blank", "noopener,noreferrer");
  }, []);
  return <Navigate to="/" replace />;
}

const Home = lazy(() => import("./pages/Home"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const Contact = lazy(() => import("./pages/Contact"));
const Process = lazy(() => import("./pages/Process"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const YYventC = lazy(() => import("./pages/YYventC"));

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
        path: "/my-work",
        element: (
          <Suspense fallback={<PageSkeleton variant="generic" />}>
            <Work />
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
        path: "/my-work/yyventc",
        element: (
          <Suspense fallback={<PageSkeleton variant="generic" />}>
            <YYventC />
          </Suspense>
        ),
      },
      {
        path: "/resume",
        element: <ResumeRedirect />,
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