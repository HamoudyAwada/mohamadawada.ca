import { Outlet, ScrollRestoration, useLocation } from 'react-router';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

declare function gtag(...args: unknown[]): void;

export default function RootLayout() {
  const location = useLocation();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_path: location.pathname,
        page_location: window.location.href,
      });
    }
  }, [location.pathname]);

  const isCaseStudy = location.pathname.startsWith('/my-work/');

  useGSAP(
    () => {
      if (!isCaseStudy) return;
      gsap.fromTo(
        wrapperRef.current,
        { filter: 'blur(14px)', opacity: 0.3 },
        { filter: 'blur(0px)', opacity: 1, duration: 0.52, ease: 'power2.out', clearProps: 'all' }
      );
    },
    { dependencies: [location.key] }
  );

  return (
    <>
      <ScrollRestoration />
      <div ref={wrapperRef}>
        <Outlet />
      </div>
    </>
  );
}
