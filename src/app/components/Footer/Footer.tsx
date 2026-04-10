import { Link } from "react-router";
import Logo from "../Logo";
import Button from "../Button";
import styles from "./Footer.module.css";

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 15" fill="none">
      <path d="M10.5 1.5L16.5 7.5M16.5 7.5L10.5 13.5M16.5 7.5H1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20.25 6.375H3.75C3.33579 6.375 3 6.71079 3 7.125V18.375C3 18.7892 3.33579 19.125 3.75 19.125H20.25C20.6642 19.125 21 18.7892 21 18.375V7.125C21 6.71079 20.6642 6.375 20.25 6.375Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.75 6.375V5.625C15.75 5.22718 15.592 4.84564 15.3107 4.56434C15.0294 4.28304 14.6478 4.125 14.25 4.125H9.75C9.35218 4.125 8.97064 4.28304 8.68934 4.56434C8.40804 4.84564 8.25 5.22718 8.25 5.625V6.375" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ProcessIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M19.491 7.5L21 6L19.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 10.5V9C3 8.20435 3.31607 7.44129 3.87868 6.87868C4.44129 6.31607 5.20435 6 6 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.5 16.5L3 18L4.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 13.5V15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.90527 20.2491C3.82736 18.6531 5.15322 17.3278 6.74966 16.4064C8.34611 15.485 10.157 15 12.0002 15C13.8435 15 15.6544 15.4851 17.2508 16.4065C18.8473 17.3279 20.1731 18.6533 21.0952 20.2493" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M19.5 21H4.5C4.10218 21 3.72064 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3H15L21 9V19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 3V9H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 13H16M8 17H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
      <path d="M18 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V18C0 18.3978 0.158035 18.7794 0.43934 19.0607C0.720644 19.342 1.10218 19.5 1.5 19.5H18C18.3978 19.5 18.7794 19.342 19.0607 19.0607C19.342 18.7794 19.5 18.3978 19.5 18V1.5C19.5 1.10218 19.342 0.720644 19.0607 0.43934C18.7794 0.158035 18.3978 0 18 0ZM18 18H1.5V1.5H18V18ZM6.75 8.25V14.25C6.75 14.4489 6.67098 14.6397 6.53033 14.7803C6.38968 14.921 6.19891 15 6 15C5.80109 15 5.61032 14.921 5.46967 14.7803C5.32902 14.6397 5.25 14.4489 5.25 14.25V8.25C5.25 8.05109 5.32902 7.86032 5.46967 7.71967C5.61032 7.57902 5.80109 7.5 6 7.5C6.19891 7.5 6.38968 7.57902 6.53033 7.71967C6.67098 7.86032 6.75 8.05109 6.75 8.25ZM15 10.875V14.25C15 14.4489 14.921 14.6397 14.7803 14.7803C14.6397 14.921 14.4489 15 14.25 15C14.0511 15 13.8603 14.921 13.7197 14.7803C13.579 14.6397 13.5 14.4489 13.5 14.25V10.875C13.5 10.3777 13.3025 9.90081 12.9508 9.54917C12.5992 9.19754 12.1223 9 11.625 9C11.1277 9 10.6508 9.19754 10.2992 9.54917C9.94754 9.90081 9.75 10.3777 9.75 10.875V14.25C9.75 14.4489 9.67098 14.6397 9.53033 14.7803C9.38968 14.921 9.19891 15 9 15C8.80109 15 8.61032 14.921 8.46967 14.7803C8.32902 14.6397 8.25 14.4489 8.25 14.25V8.25C8.25093 8.06629 8.31926 7.88931 8.44201 7.75264C8.56477 7.61596 8.73342 7.5291 8.91598 7.50852C9.09853 7.48794 9.28229 7.53508 9.43239 7.64099C9.5825 7.74691 9.68851 7.90423 9.73031 8.08313C10.2377 7.73894 10.8292 7.53947 11.4414 7.50611C12.0536 7.47276 12.6633 7.60679 13.205 7.89381C13.7468 8.18083 14.2001 8.61 14.5164 9.13523C14.8326 9.66046 14.9998 10.2619 15 10.875ZM7.125 5.625C7.125 5.8475 7.05902 6.06501 6.9354 6.25002C6.81179 6.43502 6.63609 6.57922 6.43052 6.66436C6.22495 6.74951 5.99875 6.77179 5.78052 6.72838C5.56229 6.68498 5.36184 6.57783 5.2045 6.4205C5.04717 6.26316 4.94002 6.06271 4.89662 5.84448C4.85321 5.62625 4.87549 5.40005 4.96064 5.19448C5.04578 4.98891 5.18998 4.81321 5.37498 4.6896C5.55999 4.56598 5.7775 4.5 6 4.5C6.29837 4.5 6.58452 4.61853 6.7955 4.8295C7.00647 5.04048 7.125 5.32663 7.125 5.625Z" fill="currentColor"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* ── Brand + CTA ─────────────────────────────────── */}
        <div className={styles.brandSection}>
          <div className={styles.logoHeader}>
            <div className={styles.logoRow}>
              <Logo />
              <span className={styles.logoName}>Mohamad Awada</span>
            </div>
            <p className={styles.slogan}>Made by Moe, designed with care.</p>
          </div>

          <div className={styles.ctaSection}>
            <p className={styles.ctaText}>Let's build something together.</p>
            <Button variant="primary" href="/contact" icon={<ArrowRightIcon />} fullWidth>
              Get in touch
            </Button>
          </div>
        </div>

        {/* ── Mobile-only horizontal divider ──────────────── */}
        <div className={styles.mobileDivider} />

        {/* ── Links ───────────────────────────────────────── */}
        <div className={styles.linksSection}>

          {/* Work */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Work</h4>
            <nav className={styles.linkList}>
              <Link to="/my-work" className={styles.footerLink}>
                <ProjectsIcon />
                <span>Projects</span>
              </Link>
              <Link to="/process" className={styles.footerLink}>
                <ProcessIcon />
                <span>My Process</span>
              </Link>
            </nav>
          </div>

          <div className={styles.verticalDivider} />

          {/* Me — About Me, LinkedIn, Resume on both breakpoints */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Me</h4>
            <nav className={styles.linkList}>
              <Link to="/about" className={styles.footerLink}>
                <AboutIcon />
                <span>About Me</span>
              </Link>
              <a
                href="https://www.linkedin.com/in/mohamad-awada-ux-ui-designer/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <ResumeIcon />
                <span>Resume</span>
              </a>
            </nav>
          </div>

        </div>

        {/* ── Copyright ────────────────────────────────────── */}
        <p className={styles.copyright}>© 2026 Mohamad Awada. All rights reserved. · Designed and built by Mohamad Awada (Moe)</p>

      </div>
    </footer>
  );
}
