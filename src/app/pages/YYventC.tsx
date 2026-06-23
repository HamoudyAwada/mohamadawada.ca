import { Link } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import Tag from "../components/Tag";
import FadeInImage from "../components/FadeInImage";
import styles from "./YYventC.module.css";
import content from "../../content/yyventc.json";

import imgDiscover from "../../assets/yyventc-discover.webp";
import imgEvents from "../../assets/yyventc-events.webp";
import imgEnmax from "../../assets/76f0998bf47cdb906db55598c4c600e18a2ac8fb.webp";
import imgTrumi from "../../assets/trumi-hero.webp";

const imageMap: Record<string, string> = {
  discover: imgDiscover,
  events: imgEvents,
  enmax: imgEnmax,
  trumi: imgTrumi,
};

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className={styles.checkIcon}>
      <circle cx="11" cy="11" r="11" fill="rgba(40, 160, 112, 0.15)" />
      <path d="M6.5 11L9.5 14L15.5 8" stroke="rgba(40, 160, 112, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function YYventC() {
  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className={styles.heroSection}>
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <h1 className={styles.heroTitle}>{content.hero.title}</h1>
              <p className={styles.heroSubtitle}>{content.hero.subtitle}</p>
              <div className={styles.heroTags}>
                {content.hero.tags.map((t) => (
                  <Tag key={t.label} variant={t.variant as "primary" | "secondary" | "tertiary" | "purple" | "red"}>
                    {t.label}
                  </Tag>
                ))}
              </div>
            </div>
            <div className={styles.heroRight}>
              <FadeInImage
                src={imgDiscover}
                alt="YYventC Discover feed — personalized location-aware event feed"
                className={styles.heroPhone}
                loading="eager"
              />
            </div>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── What I contributed ───────────────────────────── */}
        <section className={styles.deliverablesSection}>
          <div className={styles.deliverablesCard}>
            <span className={styles.deliverablesLabel}>What I contributed</span>
            <ul className={styles.deliverablesList}>
              {content.deliverables.map((item, i) => (
                <li key={i} className={styles.deliverablesItem}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Overview ─────────────────────────────────────── */}
        <section id="overview" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.overview.title}</h2>
            <div className={styles.bodyText}>
              {content.overview.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── The Problem ──────────────────────────────────── */}
        <section id="the-problem" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.problem.title}</h2>
            <div className={styles.bodyText}>
              {content.problem.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Problem callout quote */}
        <div className={styles.calloutWrap}>
          <div className={styles.callout}>
            <p className={styles.calloutText}>{content.problem.callout}</p>
          </div>
        </div>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Research ─────────────────────────────────────── */}
        <section id="research" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.research.title}</h2>
            <div className={styles.bodyText}>
              <p>{content.research.intro}</p>
            </div>
          </div>
        </section>

        {/* Stats — single card with all stats in a row */}
        <div className={styles.statsWrap}>
          <div className={styles.statsCard}>
            {content.research.stats.map((s, i) => (
              <div key={s.label} className={styles.statItem}>
                {i > 0 && <div className={styles.statDivider} />}
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Qualitative finding */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.bodyText}>
              <p>
                {content.research.qualitative.prefix}
                <strong className={styles.inlineHighlight}>
                  {content.research.qualitative.highlight}
                </strong>
                {content.research.qualitative.suffix}
              </p>
            </div>
          </div>
        </section>

        {/* Research callout quote */}
        <div className={styles.calloutWrap}>
          <div className={styles.callout}>
            <p className={styles.calloutText}>{content.research.researchCallout}</p>
          </div>
        </div>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── My Contributions ─────────────────────────────── */}
        <section id="contributions" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.contributions.title}</h2>

            <div className={styles.contributionBlock}>
              <h3 className={styles.subHeading}>{content.contributions.introHeading}</h3>
              <div className={styles.bodyText}>
                <p>{content.contributions.intro}</p>
              </div>
            </div>

            {content.contributions.sections.map((sec) => {
              if (sec.image === "discover") {
                return (
                  <div key={sec.heading} className={styles.contributionRow}>
                    <div className={styles.contributionText}>
                      <h3 className={styles.subHeading}>{sec.heading}</h3>
                      <div className={styles.bodyText}>
                        <p>{sec.body}</p>
                      </div>
                    </div>
                    <div className={styles.phoneImageWrap}>
                      <FadeInImage
                        src={imageMap.discover}
                        alt="YYventC Discover feed — personalized location-aware event feed"
                        className={styles.phoneImg}
                      />
                    </div>
                  </div>
                );
              }
              if (sec.image === "events") {
                return (
                  <div key={sec.heading} className={`${styles.contributionRow} ${styles.contributionRowReverse}`}>
                    <div className={styles.contributionText}>
                      <h3 className={styles.subHeading}>{sec.heading}</h3>
                      <div className={styles.bodyText}>
                        <p>{sec.body}</p>
                      </div>
                    </div>
                    <div className={styles.phoneImageWrap}>
                      <FadeInImage
                        src={imageMap.events}
                        alt="YYventC Social / Yvents feed — friends activity and attendee posts"
                        className={styles.phoneImg}
                      />
                    </div>
                  </div>
                );
              }
              return (
                <div key={sec.heading} className={styles.contributionBlock}>
                  <h3 className={styles.subHeading}>{sec.heading}</h3>
                  <div className={styles.bodyText}>
                    <p>{sec.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Outcome ──────────────────────────────────────── */}
        <section id="outcome" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.outcome.title}</h2>
            <div className={styles.bodyText}>
              <p>{content.outcome.body}</p>
            </div>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Reflection ───────────────────────────────────── */}
        <section id="reflection" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.reflection.title}</h2>
            <div className={styles.bodyText}>
              {content.reflection.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Related projects ─────────────────────────────── */}
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
                  <div
                    className={proj.imageType === "square" ? styles.relatedCardImageSquare : styles.relatedCardImage}
                  >
                    <FadeInImage
                      src={imageMap[proj.imageKey]}
                      alt={proj.title}
                      className={proj.imageType === "square" ? styles.relatedCardImgSquare : styles.relatedCardImg}
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
