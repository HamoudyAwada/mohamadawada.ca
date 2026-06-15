import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import Logo from "../Logo";
import navContent from "../../../content/nav.json";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
                {navContent.desktopLinks.map((link) =>
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
              <Link to="/contact" className={styles.navCta}>
                {navContent.contactButton}
              </Link>
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
          {navContent.mobileLinks.map((link) =>
            link.external ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileNavLink}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`${styles.mobileNavLink} ${
                  location.pathname === link.path ? styles.mobileNavLinkActive : ""
                }`}
                onClick={() => handleNavClick(link.path)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Divider */}
        <div className={styles.mobileDivider} />

        {/* Social / external links */}
        <div className={styles.mobileSocialLinks}>
          {navContent.mobileSocialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileSocialLink}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Second divider */}
        <div className={styles.mobileDivider} />

        {/* Contact button */}
        <div className={styles.mobileButton}>
          <Link
            to="/contact"
            className={`${styles.navCta} ${styles.mobileNavCta}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {navContent.contactButton}
          </Link>
        </div>

      </div>
    </>
  );
}
