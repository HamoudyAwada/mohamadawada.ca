import { Link } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import Tag from "../components/Tag";
import FadeInImage from "../components/FadeInImage";
import styles from "./EnmaxDesignSystem.module.css";
import content from "../../content/enmax-design-system.json";

import imgHero               from "../../assets/enmax-case-study-hero.png";
import imgVariableCollections from "../../assets/variable-collections.png";
import imgPrimitive          from "../../assets/primitive-variable.png";
import imgGlobal             from "../../assets/global-variable.png";
import imgSemantic           from "../../assets/semantic-variable.png";
import imgDropdown           from "../../assets/dropdown-slots.png";
import imgYYventC            from "../../assets/yyventc-discover.webp";
import imgTrumi              from "../../assets/trumi-hero.webp";

const imageMap: Record<string, string> = {
  yyventc: imgYYventC,
  trumi:   imgTrumi,
};

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className={styles.checkIcon}>
      <circle cx="11" cy="11" r="11" fill="rgba(40, 160, 112, 0.15)" />
      <path d="M6.5 11L9.5 14L15.5 8" stroke="rgba(40, 160, 112, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrowIcon}>
      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
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
          <div className={styles.heroImageWrap}>
            <FadeInImage
              src={imgHero}
              alt="ENMAX Design System — full design system overview in Figma"
              className={styles.heroImg}
              loading="eager"
            />
            <div className={styles.heroOverlay} />
            <div className={styles.heroText}>
              <div className={styles.heroTextBox}>
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
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── What I delivered ─────────────────────────────── */}
        <section className={styles.deliverablesSection}>
          <div className={styles.deliverablesCard}>
            <span className={styles.deliverablesLabel}>What I delivered</span>
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

        {/* ── The problem ───────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.problem.heading}</h2>
            <div className={styles.bodyText}>
              {content.problem.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── A foundation built to scale ───────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.foundation.heading}</h2>
            <div className={styles.bodyText}>
              <p>{content.foundation.intro}</p>
            </div>

            {/* Token architecture images */}
            <figure className={styles.archFigure}>
              <div className={styles.archCollectionsWrap}>
                <FadeInImage
                  src={imgVariableCollections}
                  alt="Variable collections panel in Figma showing Primitive, Global, and Semantic tiers"
                  className={styles.archCollectionsImg}
                />
              </div>
              <div className={styles.archTierRow}>
                <div className={styles.archTierItem}>
                  <div className={styles.archTierImgWrap}>
                    <FadeInImage
                      src={imgPrimitive}
                      alt="Primitive variable panel"
                      className={styles.archTierImg}
                    />
                  </div>
                  <span className={styles.archTierLabel}>Primitive</span>
                  <span className={styles.archTierDesc}>Raw values. Source of truth.</span>
                </div>
                <ArrowRightIcon />
                <div className={styles.archTierItem}>
                  <div className={styles.archTierImgWrap}>
                    <FadeInImage
                      src={imgGlobal}
                      alt="Global variable panel"
                      className={styles.archTierImg}
                    />
                  </div>
                  <span className={styles.archTierLabel}>Global</span>
                  <span className={styles.archTierDesc}>Named aliases with meaning.</span>
                </div>
                <ArrowRightIcon />
                <div className={styles.archTierItem}>
                  <div className={styles.archTierImgWrap}>
                    <FadeInImage
                      src={imgSemantic}
                      alt="Semantic variable panel"
                      className={styles.archTierImg}
                    />
                  </div>
                  <span className={styles.archTierLabel}>Semantic</span>
                  <span className={styles.archTierDesc}>Intent-based UI decisions.</span>
                </div>
              </div>
              <figcaption className={styles.figCaption}>{content.foundation.archImageCaption}</figcaption>
            </figure>

            <div className={styles.bodyText}>
              {content.foundation.bodyParagraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {/* Dropdown slots image */}
            <figure className={styles.sectionFigure}>
              <div className={styles.sectionImgWrap}>
                <FadeInImage
                  src={imgDropdown}
                  alt="Dropdown component in Figma showing six slot-based content zones"
                  className={styles.sectionImg}
                />
              </div>
              <figcaption className={styles.figCaption}>{content.foundation.dropdownCaption}</figcaption>
            </figure>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── AI-assisted workflow ──────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.aiWorkflow.heading}</h2>
            <div className={styles.bodyText}>
              {content.aiWorkflow.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Closing the loop ──────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.codeLoop.heading}</h2>
            <div className={styles.bodyText}>
              {content.codeLoop.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Related projects ─────────────────────────────── */}
        <section className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>Check Out These Projects</h2>
          <div className={styles.relatedGrid}>
            {content.relatedProjects.map((proj) => (
              <Link key={proj.slug} to={`/my-work/${proj.slug}`} className={styles.relatedCard}>
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
