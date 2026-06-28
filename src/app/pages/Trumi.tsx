import { Link } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import Tag from "../components/Tag";
import FadeInImage from "../components/FadeInImage";
import styles from "./Trumi.module.css";
import content from "../../content/trumi.json";

import imgHeroDesktop from "../../assets/trumi-hero-desktop.png";
import imgHeroMobile  from "../../assets/trumi-character.png";
import imgHomeScreen  from "../../assets/trumi-home-screen.png";
import imgAiChat      from "../../assets/ai-chat.png";
import imgGoals                from "../../assets/trumi-goals.png";
import imgJourney              from "../../assets/trumi-journey.png";
import imgAchievementsDashboard from "../../assets/trumi-achievements-dashboard.png";
import imgAchievementsGrid     from "../../assets/trumi-achievements-grid.png";

import imgEnmax   from "../../assets/76f0998bf47cdb906db55598c4c600e18a2ac8fb.webp";
import imgYYventC from "../../assets/yyventc-discover.webp";

const imageMap: Record<string, string> = {
  enmax:   imgEnmax,
  yyventc: imgYYventC,
};

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className={styles.checkIcon}>
      <circle cx="11" cy="11" r="11" fill="rgba(40, 160, 112, 0.15)" />
      <path d="M6.5 11L9.5 14L15.5 8" stroke="rgba(40, 160, 112, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const s = content.contributions.sections;

export default function Trumi() {
  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className={styles.heroSection}>
          <div className={styles.heroImageWrap}>
            <FadeInImage
              src={imgHeroDesktop}
              alt="Trumi app — key screens: home dashboard, character companion, and goals tracker"
              className={styles.heroImgDesktop}
              loading="eager"
            />
            <FadeInImage
              src={imgHeroMobile}
              alt="Trumi — meet Alex, your personal growth companion"
              className={styles.heroImgMobile}
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
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.overview.title}</h2>
            <div className={styles.bodyText}>
              {content.overview.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── The Problem ──────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.problem.title}</h2>
            <div className={styles.bodyText}>
              {content.problem.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <blockquote className={styles.callout}>
              <p className={styles.calloutText}>{content.problem.callout}</p>
            </blockquote>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Research ─────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.research.title}</h2>
            <div className={styles.bodyText}>
              <p>{content.research.intro}</p>
            </div>

            <div className={styles.statsCard}>
              {content.research.stats.map((s, i) => (
                <div key={s.label} className={styles.statItem}>
                  {i > 0 && <div className={styles.statDivider} />}
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.bodyText}>
              <p>{content.research.postStats}</p>
              <p>{content.research.qualitative}</p>
            </div>

            <blockquote className={styles.callout}>
              <p className={styles.calloutText}>{content.research.callout}</p>
            </blockquote>

            <div className={styles.bodyText}>
              <p>{content.research.postCallout}</p>
            </div>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── My Contributions ─────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.contributions.title}</h2>
            <div className={styles.bodyText}>
              <p>{content.contributions.intro}</p>
            </div>

            {/* AI & Character — merged sections 0 + 1 */}
            <div className={styles.contributionBlock}>
              <h3 className={styles.subHeading}>{s[0].heading}</h3>
              <div className={styles.bodyText}>
                {[...s[0].paragraphs, ...s[1].paragraphs].map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <figure className={styles.dualPhoneFigure}>
              <div className={styles.dualPhoneImgWrap}>
                <FadeInImage
                  src={imgHomeScreen}
                  alt="Trumi home screen showing the Alex character, personal values, and today's goal"
                  className={styles.dualPhoneImg}
                />
                <FadeInImage
                  src={imgAiChat}
                  alt="Trumi AI chat screen showing a guided conversation with the companion"
                  className={styles.dualPhoneImg}
                />
              </div>
              <figcaption className={styles.figCaption}>
                The home screen greets you with a message from your character, surfaces your values, and keeps today's focus visible. The AI chat is built on the Gemini API and gives users a space for guided reflection and gentle nudges.
              </figcaption>
            </figure>

            {/* Gamification & Achievements — section 2 */}
            <div className={styles.contributionBlock}>
              <h3 className={styles.subHeading}>{s[2].heading}</h3>
              <div className={styles.bodyText}>
                {s[2].paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <figure className={styles.dualPhoneFigure}>
              <div className={styles.dualPhoneImgWrap}>
                <FadeInImage
                  src={imgAchievementsDashboard}
                  alt="Trumi Goals Summary showing active streaks, recent wins, and achievement badges"
                  className={styles.dualPhoneImg}
                />
                <FadeInImage
                  src={imgAchievementsGrid}
                  alt="Trumi full achievements grid showing locked and unlocked badges"
                  className={styles.dualPhoneImg}
                />
              </div>
              <figcaption className={styles.figCaption}>
                The Goals Summary keeps live streaks, recent wins, and your current badges all in one place. The full achievements grid shows everything you have earned and everything still ahead.
              </figcaption>
            </figure>

            {/* Goals and Your Journey — section 3 */}
            <div className={styles.contributionBlock}>
              <h3 className={styles.subHeading}>{s[3].heading}</h3>
              <div className={styles.bodyText}>
                {s[3].paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <figure className={styles.dualPhoneFigure}>
              <div className={styles.dualPhoneImgWrap}>
                <FadeInImage
                  src={imgGoals}
                  alt="Trumi goals screen showing active short-term and long-term goals"
                  className={styles.dualPhoneImg}
                />
                <FadeInImage
                  src={imgJourney}
                  alt="Trumi My Journey screen showing character progression path and milestones"
                  className={styles.dualPhoneImg}
                />
              </div>
              <figcaption className={styles.figCaption}>
                The goals view organizes short and long-term goals so users always know what to focus on next. My Journey is a visual progress map where character growth is tied directly to real user actions.
              </figcaption>
            </figure>

            {/* Keeping It Light — section 4 */}
            <div className={styles.contributionBlock}>
              <h3 className={styles.subHeading}>{s[4].heading}</h3>
              <div className={styles.bodyText}>
                {s[4].paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Outcome ──────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.outcome.title}</h2>
            <div className={styles.bodyText}>
              {content.outcome.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Reflection ───────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.reflection.title}</h2>
            <div className={styles.bodyText}>
              {content.reflection.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
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
