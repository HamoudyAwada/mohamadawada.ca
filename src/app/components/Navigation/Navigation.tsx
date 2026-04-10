import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import Logo from "../Logo";
import Button from "../Button";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (path: string) => {
    // Close menu if clicking current page link
    if (location.pathname === path) {
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "My Work", path: "/my-work", external: false },
    { label: "Process", path: "/process", external: false },
    { label: "About Me", path: "/about", external: false },
    { label: "Resume", path: "/resume.pdf", external: true },
  ];

  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            {/* Logo and nav links (desktop) */}
            <div className={styles.leftSection}>
              <Link to="/" className={styles.logoLink}>
                <Logo />
              </Link>
              <div className={styles.desktopNav}>
                {navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.path}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.navLink}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`${styles.navLink} ${
                        location.pathname === link.path ? styles.active : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Contact button (desktop) */}
            <div className={styles.desktopButton}>
              <Button variant="primary" size="small" href="/contact">
                Contact Me
              </Button>
            </div>

            {/* Hamburger menu (mobile) */}
            <button
              className={styles.hamburger}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.open : ""}`}
      >
        <div className={styles.overlayHeader}>
          <Link to="/" className={styles.logoLink}>
            <Logo />
          </Link>
          <button
            className={styles.closeButton}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.overlayContent}>
          <div className={styles.mobileContentWrapper}>
            <div className={styles.mobileNav}>
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`${styles.mobileNavLink} ${
                      location.pathname === link.path ? styles.active : ""
                    }`}
                    onClick={() => handleNavClick(link.path)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            <div className={styles.mobileDivider}>
              <svg width="100%" height="2" fill="none" preserveAspectRatio="none" viewBox="0 0 347 2">
                <path d="M1 1H346" stroke="#3C3C3C" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>

            <div className={styles.mobileSocialLinks}>
              <a 
                href="https://www.linkedin.com/in/mohamad-awada-ux-ui-designer/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.mobileSocialLink}
              >
                <svg width="24" height="24" viewBox="0 0 19.5 19.5" fill="none">
                  <path d="M18 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V18C0 18.3978 0.158035 18.7794 0.43934 19.0607C0.720644 19.342 1.10218 19.5 1.5 19.5H18C18.3978 19.5 18.7794 19.342 19.0607 19.0607C19.342 18.7794 19.5 18.3978 19.5 18V1.5C19.5 1.10218 19.342 0.720644 19.0607 0.43934C18.7794 0.158035 18.3978 0 18 0ZM18 18H1.5V1.5H18V18ZM6.75 8.25V14.25C6.75 14.4489 6.67098 14.6397 6.53033 14.7803C6.38968 14.921 6.19891 15 6 15C5.80109 15 5.61032 14.921 5.46967 14.7803C5.32902 14.6397 5.25 14.4489 5.25 14.25V8.25C5.25 8.05109 5.32902 7.86032 5.46967 7.71967C5.61032 7.57902 5.80109 7.5 6 7.5C6.19891 7.5 6.38968 7.57902 6.53033 7.71967C6.67098 7.86032 6.75 8.05109 6.75 8.25ZM15 10.875V14.25C15 14.4489 14.921 14.6397 14.7803 14.7803C14.6397 14.921 14.4489 15 14.25 15C14.0511 15 13.8603 14.921 13.7197 14.7803C13.579 14.6397 13.5 14.4489 13.5 14.25V10.875C13.5 10.3777 13.3025 9.90081 12.9508 9.54917C12.5992 9.19754 12.1223 9 11.625 9C11.1277 9 10.6508 9.19754 10.2992 9.54917C9.94754 9.90081 9.75 10.3777 9.75 10.875V14.25C9.75 14.4489 9.67098 14.6397 9.53033 14.7803C9.38968 14.921 9.19891 15 9 15C8.80109 15 8.61032 14.921 8.46967 14.7803C8.32902 14.6397 8.25 14.4489 8.25 14.25V8.25C8.25093 8.06629 8.31926 7.88931 8.44201 7.75264C8.56477 7.61596 8.73342 7.5291 8.91598 7.50852C9.09853 7.48794 9.28229 7.53508 9.43239 7.64099C9.5825 7.74691 9.68851 7.90423 9.73031 8.08313C10.2377 7.73894 10.8292 7.53947 11.4414 7.50611C12.0536 7.47276 12.6633 7.60679 13.205 7.89381C13.7468 8.18083 14.2001 8.61 14.5164 9.13523C14.8326 9.66046 14.9998 10.2619 15 10.875ZM7.125 5.625C7.125 5.8475 7.05902 6.06501 6.9354 6.25002C6.81179 6.43502 6.63609 6.57922 6.43052 6.66436C6.22495 6.74951 5.99875 6.77179 5.78052 6.72838C5.56229 6.68498 5.36184 6.57783 5.2045 6.4205C5.04717 6.26316 4.94002 6.06271 4.89662 5.84448C4.85321 5.62625 4.87549 5.40005 4.96064 5.19448C5.04578 4.98891 5.18998 4.81321 5.37498 4.6896C5.55999 4.56598 5.7775 4.5 6 4.5C6.29837 4.5 6.58452 4.61853 6.7955 4.8295C7.00647 5.04048 7.125 5.32663 7.125 5.625Z" fill="currentColor" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a 
                href="/contact" 
                className={styles.mobileSocialLink}
              >
                <svg width="24" height="24" viewBox="0 0 19.5 15" fill="none">
                  <path d="M18.75 0H0.75C0.551088 0 0.360322 0.0790178 0.21967 0.21967C0.0790176 0.360322 0 0.551088 0 0.75V13.5C0 13.8978 0.158035 14.2794 0.43934 14.5607C0.720644 14.842 1.10218 15 1.5 15H18C18.3978 15 18.7794 14.842 19.0607 14.5607C19.342 14.2794 19.5 13.8978 19.5 13.5V0.75C19.5 0.551088 19.421 0.360322 19.2803 0.21967C19.1397 0.0790178 18.9489 0 18.75 0ZM16.8216 1.5L9.75 7.98281L2.67844 1.5H16.8216ZM18 13.5H1.5V2.45531L9.24281 9.55312C9.38118 9.68014 9.56217 9.75062 9.75 9.75062C9.93783 9.75062 10.1188 9.68014 10.2572 9.55312L18 2.45531V13.5Z" fill="currentColor" />
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className={styles.mobileButton}>
            <Button variant="primary" size="medium" href="/contact" fullWidth>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}