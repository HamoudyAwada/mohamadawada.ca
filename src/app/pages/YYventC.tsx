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
import imgTrumi from "../../assets/ab72dd35391820c5919d41bb47e2f9abe185f5e4.webp";

const imageMap: Record<string, string> = {
  discover: imgDiscover,
  events: imgEvents,
  enmax: imgEnmax,
  trumi: imgTrumi,
};

export default function YYventC() {
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
                <span className={styles.metaValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Overview ─────────────────────────────────────── */}
        <section className={styles.section}>
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
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.problem.title}</h2>
            <div className={styles.bodyText}>
              {content.problem.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Callout block ────────────────────────────────── */}
        <div className={styles.calloutWrap}>
          <div className={styles.callout}>
            <div className={styles.calloutAccent} />
            <p className={styles.calloutText}>{content.problem.callout}</p>
          </div>
        </div>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Research ─────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.research.title}</h2>
            <p className={styles.bodyParagraph}>{content.research.intro}</p>
          </div>
        </section>

        {/* Stats bar — full-width constrained */}
        <div className={styles.statsWrap}>
          {content.research.stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Qualitative finding */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.bodyParagraph}>
              {content.research.qualitative.prefix}
              <strong className={styles.inlineHighlight}>
                {content.research.qualitative.highlight}
              </strong>
              {content.research.qualitative.suffix}
            </p>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── My Contributions ─────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.contributions.title}</h2>

            {content.contributions.sections.map((sec) => {
              if (sec.image === "discover") {
                return (
                  <div key={sec.heading} className={styles.contributionRow}>
                    <div className={styles.contributionText}>
                      <h3 className={styles.subHeading}>{sec.heading}</h3>
                      <p className={styles.bodyParagraph}>{sec.body}</p>
                    </div>
                    <div className={styles.phoneImageDiscover}>
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
                    <div className={styles.phoneImageEvents}>
                      <FadeInImage
                        src={imageMap.events}
                        alt="YYventC Social / Yvents feed — friends activity and attendee posts"
                        className={styles.phoneImg}
                      />
                    </div>
                    <div className={styles.contributionText}>
                      <h3 className={styles.subHeading}>{sec.heading}</h3>
                      <p className={styles.bodyParagraph}>{sec.body}</p>
                    </div>
                  </div>
                );
              }
              return (
                <div key={sec.heading} className={styles.contributionBlock}>
                  <h3 className={styles.subHeading}>{sec.heading}</h3>
                  <p className={styles.bodyParagraph}>{sec.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Outcome ──────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.outcome.title}</h2>
            <p className={styles.bodyParagraph}>{content.outcome.body}</p>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Reflection ───────────────────────────────────── */}
        <section className={styles.section}>
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
                  <div className={styles.relatedCardImage}>
                    <FadeInImage
                      src={imageMap[proj.imageKey]}
                      alt={proj.title}
                      className={styles.relatedCardImg}
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
