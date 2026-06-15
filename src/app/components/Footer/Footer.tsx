import { Link } from "react-router";
import Logo from "../Logo";
import { arrowRight } from "../../data/svgPaths";
import footerContent from "../../../content/footer.json";
import styles from "./Footer.module.css";

function IconRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 18.0006 15.0008" fill="none">
      <path d={arrowRight} fill="currentColor" />
    </svg>
  );
}

function FooterLinks({ links }: { links: typeof footerContent.columns.work.links }) {
  return (
    <nav className={styles.linkList}>
      {links.map((link) =>
        link.external ? (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            {link.label}
          </a>
        ) : (
          <Link key={link.href} to={link.href} className={styles.footerLink}>
            {link.label}
          </Link>
        )
      )}
    </nav>
  );
}

export default function Footer() {
  const { cta, columns, copyright } = footerContent;

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.topRow}>
          {/* Logo and contact CTA */}
          <div className={styles.brandSection}>
            <Logo showText />

            <div className={styles.mobileDivider} />

            <div className={styles.ctaSection}>
              <p className={styles.ctaText}>{cta.text}</p>
              <Link to={cta.href} className={styles.ctaButton}>
                {cta.button}
                <IconRight />
              </Link>
            </div>
          </div>

          <div className={styles.mobileDivider} />

          {/* Links section */}
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{columns.work.title}</h4>
              <FooterLinks links={columns.work.links} />
            </div>

            <div className={styles.verticalDivider} />

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{columns.connect.title}</h4>
              <FooterLinks links={columns.connect.links} />
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
