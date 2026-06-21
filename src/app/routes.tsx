import { createBrowserRouter } from "react-router";
import { Suspense, lazy } from "react";
import PageSkeleton from "./components/PageSkeleton";
import RootLayout from "./components/RootLayout";

const Home = lazy(() => import("./pages/Home"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const Contact = lazy(() => import("./pages/Contact"));
const Process = lazy(() => import("./pages/Process"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const YYventC = lazy(() => import("./pages/YYventC"));
const Trumi = lazy(() => import("./pages/Trumi"));
const EnmaxDesignSystem = lazy(() => import("./pages/EnmaxDesignSystem"));
const SignatureTest = lazy(() => import("./pages/SignatureTest"));
const SkeletonTest = lazy(() => import("./pages/SkeletonTest"));
const Resume = lazy(() => import("./pages/Resume"));

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
        path: "/my-work/enmax-design-system",
        element: (
          <Suspense fallback={<PageSkeleton variant="generic" />}>
            <EnmaxDesignSystem />
          </Suspense>
        ),
      },
      {
        path: "/my-work/trumi",
        element: (
          <Suspense fallback={<PageSkeleton variant="generic" />}>
            <Trumi />
          </Suspense>
        ),
      },
      {
        path: "/resume",
        element: (
          <Suspense fallback={<PageSkeleton variant="generic" />}>
            <Resume />
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
        path: "/signature-test",
        element: (
          <Suspense fallback={<PageSkeleton variant="generic" />}>
            <SignatureTest />
          </Suspense>
        ),
      },
      {
        path: "/skeleton-test",
        element: (
          <Suspense fallback={null}>
            <SkeletonTest />
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