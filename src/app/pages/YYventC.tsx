import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import Tag from "../components/Tag";
import FadeInImage from "../components/FadeInImage";
import styles from "./YYventC.module.css";
import content from "../../content/yyventc.json";

import imgDiscover from "../../assets/yyventc-discover.webp";
import imgEvents from "../../assets/yyventc-events.webp";

export default function YYventC() {
  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className={styles.heroSection}>
          <div className={styles.heroInner}>
            <span className={styles.badge}>{content.hero.badge}</span>
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
        </section>

        {/* ── Meta ─────────────────────────────────────────── */}
        <section className={styles.metaSection}>
          <div className={styles.metaGrid}>
            {content.meta.map((item) => (
              <div key={item.label} className={styles.metaItem}>
                <span className={styles.metaLabel}>{item.label}</span>
                <span className={styles.metaValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <Divider />

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

        <Divider />

        {/* ── The Problem ──────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.problem.title}</h2>
            <div className={styles.bodyText}>
              {content.problem.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <blockquote className={styles.blockquote}>
              {content.problem.quote}
            </blockquote>
          </div>
        </section>

        <Divider />

        {/* ── Research & Discovery ─────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.research.title}</h2>

            {/* Stats row */}
            <div className={styles.statsGrid}>
              {content.research.stats.map((s) => (
                <div key={s.label} className={styles.statCard}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Landscape */}
            <div className={styles.subSection}>
              <h3 className={styles.subHeading}>{content.research.landscape.heading}</h3>
              <p className={styles.bodyParagraph}>{content.research.landscape.body}</p>
            </div>

            {/* Survey */}
            <div className={styles.subSection}>
              <h3 className={styles.subHeading}>{content.research.survey.heading}</h3>
              <p className={styles.bodyParagraph}>{content.research.survey.body}</p>
            </div>

            {/* Key findings */}
            <div className={styles.subSection}>
              <div className={styles.bodyText}>
                {content.research.findings.map((f, i) => (
                  <p key={i}>{f}</p>
                ))}
              </div>
            </div>

            {/* Personas */}
            <div className={styles.subSection}>
              <h3 className={styles.subHeading}>{content.research.personas.heading}</h3>
              <p className={styles.bodyParagraph}>{content.research.personas.body}</p>
              <div className={styles.personaGrid}>
                {content.research.personas.items.map((persona) => (
                  <div key={persona.name} className={styles.personaCard}>
                    <h4 className={styles.personaName}>{persona.name}</h4>
                    <p className={styles.personaDescription}>{persona.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── My Role in the Process ───────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.process.title}</h2>

            {/* IA & Prioritization */}
            <div className={styles.subSection}>
              <h3 className={styles.subHeading}>{content.process.ia.heading}</h3>
              <div className={styles.bodyText}>
                {content.process.ia.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Navigation Structure + Discover image */}
            <div className={styles.subSection}>
              <h3 className={styles.subHeading}>{content.process.navigation.heading}</h3>
              <div className={styles.bodyText}>
                {content.process.navigation.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Three pillars */}
              <div className={styles.pillarsGrid}>
                {content.process.navigation.pillars.map((pillar) => (
                  <div key={pillar.name} className={styles.pillarCard}>
                    <span className={styles.pillarName}>{pillar.name}</span>
                    <span className={styles.pillarDesc}>{pillar.description}</span>
                  </div>
                ))}
              </div>

              {/* Discover page image */}
              <figure className={styles.imageBlock}>
                <div className={styles.imageWrapper}>
                  <FadeInImage
                    src={imgDiscover}
                    alt="YYventC Discover Page — personalized event feed with location-aware surfacing"
                    className={styles.caseImage}
                  />
                </div>
                <figcaption className={styles.imageCaption}>
                  {content.process.navigation.imageCaption}
                </figcaption>
              </figure>
            </div>

            {/* Signed-in vs Signed-out + Events image */}
            <div className={styles.subSection}>
              <h3 className={styles.subHeading}>{content.process.signedIn.heading}</h3>
              <div className={styles.bodyText}>
                {content.process.signedIn.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Events / Social page image */}
              <figure className={styles.imageBlock}>
                <div className={styles.imageWrapper}>
                  <FadeInImage
                    src={imgEvents}
                    alt="YYventC Events and Social Feed — friends activity and community posts"
                    className={styles.caseImage}
                  />
                </div>
                <figcaption className={styles.imageCaption}>
                  {content.process.signedIn.imageCaption}
                </figcaption>
              </figure>
            </div>

            {/* Refinement */}
            <div className={styles.subSection}>
              <h3 className={styles.subHeading}>{content.process.refinement.heading}</h3>
              <div className={styles.bodyText}>
                {content.process.refinement.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Design Decisions ─────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.decisions.title}</h2>
            <div className={styles.decisionsGrid}>
              {content.decisions.items.map((d) => (
                <div key={d.heading} className={styles.decisionCard}>
                  <h3 className={styles.decisionHeading}>{d.heading}</h3>
                  <p className={styles.decisionBody}>{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── The Final Product ────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.finalProduct.title}</h2>
            <p className={styles.bodyParagraph}>{content.finalProduct.intro}</p>
            <ul className={styles.deliverablesList}>
              {content.finalProduct.deliverables.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
            <p className={styles.bodyParagraph}>{content.finalProduct.outcome}</p>
          </div>
        </section>

        <Divider />

        {/* ── Reflection ───────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.reflection.title}</h2>
            <div className={styles.bodyText}>
              {content.reflection.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className={styles.attribution}>{content.reflection.attribution}</p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
