import { Link } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import Tag from "../components/Tag";
import FadeInImage from "../components/FadeInImage";
import styles from "./EnmaxDesignSystem.module.css";
import content from "../../content/enmax-design-system.json";

import imgYYventC from "../../assets/yyventc-discover.webp";
import imgTrumi   from "../../assets/trumi-hero.webp";

const imageMap: Record<string, string> = {
  yyventc: imgYYventC,
  trumi:   imgTrumi,
};

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M224,104a8,8,0,0,1-16,0V59.32l-82.34,82.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z" />
    </svg>
  );
}

export default function EnmaxDesignSystem() {
  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className={styles.heroSection}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>{content.hero.title}</h1>
              <p className={styles.heroSubtitle}>{content.hero.subtitle}</p>
            </div>
            <div className={styles.heroTags}>
              {content.hero.tags.map((t) => (
                <Tag key={t.label} variant={t.variant as "primary" | "secondary" | "tertiary" | "purple" | "red"}>
                  {t.label}
                </Tag>
              ))}
            </div>
          </div>
        </section>

        {/* ── Meta bar ─────────────────────────────────────── */}
        <section className={styles.metaSection}>
          <div className={styles.metaBar}>
            {content.meta.map((item) => (
              <div key={item.label} className={styles.metaItem}>
                <span className={styles.metaLabel}>{item.label}</span>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.metaLink}
                  >
                    {item.value}
                    <ExternalLinkIcon className={styles.metaLinkIcon} />
                  </a>
                ) : (
                  <span className={styles.metaValue}>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Ongoing message ───────────────────────────────── */}
        <section className={styles.ongoingSection}>
          <p className={styles.ongoingText}>
            {content.ongoingText.before}
            <Link to="/contact" className={styles.ongoingLink}>
              {content.ongoingText.linkText}
            </Link>
            {content.ongoingText.after}
          </p>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Check Out These Projects ─────────────────────── */}
        <section className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>Check Out These Projects</h2>
          <div className={styles.relatedGrid}>
            {content.relatedProjects.map((proj) => (
              <Link
                key={proj.slug}
                to={`/my-work/${proj.slug}`}
                className={styles.relatedCard}
              >
                <p className={styles.relatedCardTitle}>{proj.title}</p>
                <div className={styles.relatedCardBody}>
                  <div className={styles.relatedCardImageSquare}>
                    <FadeInImage
                      src={imageMap[proj.imageKey]}
                      alt={proj.title}
                      className={styles.relatedCardImgSquare}
                    />
                  </div>
                  <p className={styles.relatedCardDesc}>{proj.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
