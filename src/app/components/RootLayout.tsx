import { Outlet, ScrollRestoration, useLocation } from 'react-router';
import { useEffect } from 'react';

declare function gtag(...args: unknown[]): void;

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_path: location.pathname,
        page_location: window.location.href,
      });
    }
  }, [location.pathname]);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}
