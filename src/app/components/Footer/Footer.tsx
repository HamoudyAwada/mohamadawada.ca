import { Link } from "react-router";
import Logo from "../Logo";
import Button from "../Button";
import Divider from "../Divider";
import svgPaths from "../../../imports/DesktopHome-1/svg-34ib9iantb";
import footerContent from "../../../content/footer.json";
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

const iconMap: Record<string, JSX.Element> = {
  projects: <ProjectsIcon />,
  process: <ProcessIcon />,
  about: <AboutIcon />,
  resume: <ResumeIcon />,
  linkedin: <LinkedInIcon />,
};

export default function Footer() {
  const { cta, columns, copyright } = footerContent;

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
              <p className={styles.ctaText}>{cta.text}</p>
              <Button
                variant="primary"
                href={cta.href}
                icon={<IconRight />}
                fullWidth
              >
                {cta.button}
              </Button>
            </div>
          </div>

          {/* Links section */}
          <div className={styles.linksSection}>
            {/* Work column */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{columns.work.title}</h4>
              <nav className={styles.linkList}>
                {columns.work.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.footerLink}
                    >
                      {iconMap[link.icon]}
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link key={link.href} to={link.href} className={styles.footerLink}>
                      {iconMap[link.icon]}
                      <span>{link.label}</span>
                    </Link>
                  )
                )}
              </nav>
            </div>

            {/* Me column */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{columns.me.title}</h4>
              <nav className={styles.linkList}>
                {columns.me.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.footerLink}
                    >
                      {iconMap[link.icon]}
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link key={link.href} to={link.href} className={styles.footerLink}>
                      {iconMap[link.icon]}
                      <span>{link.label}</span>
                    </Link>
                  )
                )}
              </nav>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          {copyright.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}
