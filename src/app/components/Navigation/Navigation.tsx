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
    if (location.pathname === path) {
      setMobileMenuOpen(false);
    }
  };

  const desktopNavLinks = [
    { label: "My Work", path: "/my-work" },
    { label: "Process", path: "/process" },
    { label: "About Me", path: "/about" },
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
                {desktopNavLinks.map((link) =>
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
      <div className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.open : ""}`}>

        {/* Header row */}
        <div className={styles.overlayHeader}>
          <Link to="/" className={styles.logoLink} onClick={() => setMobileMenuOpen(false)}>
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

        {/* Nav links */}
        <div className={styles.mobileNav}>
          <Link
            to="/my-work"
            className={`${styles.mobileNavLink} ${location.pathname === "/my-work" ? styles.mobileNavLinkActive : ""}`}
            onClick={() => handleNavClick("/my-work")}
          >
            My Work
          </Link>

          <Link
            to="/process"
            className={`${styles.mobileNavLink} ${location.pathname === "/process" ? styles.mobileNavLinkActive : ""}`}
            onClick={() => handleNavClick("/process")}
          >
            Process
          </Link>

          <Link
            to="/about"
            className={`${styles.mobileNavLink} ${location.pathname === "/about" ? styles.mobileNavLinkActive : ""}`}
            onClick={() => handleNavClick("/about")}
          >
            About Me
          </Link>
        </div>

        {/* Divider */}
        <div className={styles.mobileDivider} />

        {/* Social / external links — no email, Contact Me button handles that */}
        <div className={styles.mobileSocialLinks}>
          <a
            href="https://www.linkedin.com/in/mohamad-awada-ux-ui-designer/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileSocialLink}
          >
            {/* LinkedIn icon */}
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V18C0 18.3978 0.158035 18.7794 0.43934 19.0607C0.720644 19.342 1.10218 19.5 1.5 19.5H18C18.3978 19.5 18.7794 19.342 19.0607 19.0607C19.342 18.7794 19.5 18.3978 19.5 18V1.5C19.5 1.10218 19.342 0.720644 19.0607 0.43934C18.7794 0.158035 18.3978 0 18 0ZM18 18H1.5V1.5H18V18ZM6.75 8.25V14.25C6.75 14.4489 6.67098 14.6397 6.53033 14.7803C6.38968 14.921 6.19891 15 6 15C5.80109 15 5.61032 14.921 5.46967 14.7803C5.32902 14.6397 5.25 14.4489 5.25 14.25V8.25C5.25 8.05109 5.32902 7.86032 5.46967 7.71967C5.61032 7.57902 5.80109 7.5 6 7.5C6.19891 7.5 6.38968 7.57902 6.53033 7.71967C6.67098 7.86032 6.75 8.05109 6.75 8.25ZM15 10.875V14.25C15 14.4489 14.921 14.6397 14.7803 14.7803C14.6397 14.921 14.4489 15 14.25 15C14.0511 15 13.8603 14.921 13.7197 14.7803C13.579 14.6397 13.5 14.4489 13.5 14.25V10.875C13.5 10.3777 13.3025 9.90081 12.9508 9.54917C12.5992 9.19754 12.1223 9 11.625 9C11.1277 9 10.6508 9.19754 10.2992 9.54917C9.94754 9.90081 9.75 10.3777 9.75 10.875V14.25C9.75 14.4489 9.67098 14.6397 9.53033 14.7803C9.38968 14.921 9.19891 15 9 15C8.80109 15 8.61032 14.921 8.46967 14.7803C8.32902 14.6397 8.25 14.4489 8.25 14.25V8.25C8.25093 8.06629 8.31926 7.88931 8.44201 7.75264C8.56477 7.61596 8.73342 7.5291 8.91598 7.50852C9.09853 7.48794 9.28229 7.53508 9.43239 7.64099C9.5825 7.74691 9.68851 7.90423 9.73031 8.08313C10.2377 7.73894 10.8292 7.53947 11.4414 7.50611C12.0536 7.47276 12.6633 7.60679 13.205 7.89381C13.7468 8.18083 14.2001 8.61 14.5164 9.13523C14.8326 9.66046 14.9998 10.2619 15 10.875ZM7.125 5.625C7.125 5.8475 7.05902 6.06501 6.9354 6.25002C6.81179 6.43502 6.63609 6.57922 6.43052 6.66436C6.22495 6.74951 5.99875 6.77179 5.78052 6.72838C5.56229 6.68498 5.36184 6.57783 5.2045 6.4205C5.04717 6.26316 4.94002 6.06271 4.89662 5.84448C4.85321 5.62625 4.87549 5.40005 4.96064 5.19448C5.04578 4.98891 5.18998 4.81321 5.37498 4.6896C5.55999 4.56598 5.7775 4.5 6 4.5C6.29837 4.5 6.58452 4.61853 6.7955 4.8295C7.00647 5.04048 7.125 5.32663 7.125 5.625Z" fill="currentColor"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileSocialLink}
          >
            {/* File/document icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 21H4.5C4.10218 21 3.72064 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3H15L21 9V19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 3V9H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 13H16M8 17H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>Resume</span>
          </a>

        </div>

        {/* Second divider */}
        <div className={styles.mobileDivider} />

        {/* Contact button */}
        <div className={styles.mobileButton}>
          <Button variant="primary" size="medium" href="/contact" fullWidth>
            Contact Me
          </Button>
        </div>

      </div>
    </>
  );
}
