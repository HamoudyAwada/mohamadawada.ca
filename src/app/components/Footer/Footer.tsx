import { Link } from "react-router";
import Logo from "../Logo";
import Button from "../Button";
import Divider from "../Divider";
import svgPaths from "../../../imports/DesktopHome-1/svg-34ib9iantb";
import styles from "./Footer.module.css";

function IconRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 18.0006 15.0008" fill="none">
      <path d={svgPaths.p269480} fill="currentColor" />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 19.5 18" fill="none">
      <path d={svgPaths.p37b30580} fill="currentColor" />
    </svg>
  );
}

function CaseStudiesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 16.5 19.5" fill="none">
      <path d={svgPaths.p3c0f2c80} fill="currentColor" />
    </svg>
  );
}

function ProcessIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 18 17.6377" fill="none">
      <path d={svgPaths.p3f524200} fill="currentColor" />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 19.5188 18.7697" fill="none">
      <path d={svgPaths.p15420900} fill="currentColor" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 16.5 19.5" fill="none">
      <path d={svgPaths.p1b4b5d80} fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 19.5 19.5" fill="none">
      <path d={svgPaths.p15506800} fill="currentColor" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 19.5 15" fill="none">
      <path d={svgPaths.pad01a80} fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo and CTA section */}
          <div className={styles.brandSection}>
            <div className={styles.logoSection}>
              <Logo variant="footer" showText />
            </div>

            <div className={styles.ctaSection}>
              <p className={styles.ctaText}>Let's build something together.</p>
              <Button 
                variant="primary" 
                href="/contact" 
                icon={<IconRight />}
                fullWidth
              >
                Get in touch
              </Button>
            </div>
          </div>

          {/* Links section */}
          <div className={styles.linksSection}>
            {/* Work column */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Work</h4>
              <nav className={styles.linkList}>
                <Link to="/my-work" className={styles.footerLink}>
                  <ProjectsIcon />
                  <span>Projects</span>
                </Link>
                <Link to="/my-work" className={styles.footerLink}>
                  <CaseStudiesIcon />
                  <span>Case Studies</span>
                </Link>
                <Link to="/process" className={styles.footerLink}>
                  <ProcessIcon />
                  <span>My Process</span>
                </Link>
              </nav>
            </div>

            {/* Me column */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Me</h4>
              <nav className={styles.linkList}>
                <Link to="/about" className={styles.footerLink}>
                  <AboutIcon />
                  <span>About Me</span>
                </Link>
                <Link to="/resume" className={styles.footerLink}>
                  <ResumeIcon />
                  <span>Resume</span>
                </Link>
              </nav>
            </div>

            {/* Connect column */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Connect</h4>
              <nav className={styles.linkList}>
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.footerLink}
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
                <Link to="/contact" className={styles.footerLink}>
                  <EmailIcon />
                  <span>Email</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}