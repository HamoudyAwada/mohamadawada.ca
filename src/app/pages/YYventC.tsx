import { Link } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import FadeInImage from "../components/FadeInImage";
import styles from "./YYventC.module.css";
import content from "../../content/yyventc.json";

import imgHero       from "../../assets/yyventc-hero-desktop.webp";
import imgKeyScreens from "../../assets/yyventc-key-screens.webp";
import imgDiscover   from "../../assets/yyventc-discovery-full.png";
import imgCommunity  from "../../assets/yyventc-community.webp";
import imgOnboarding from "../../assets/yyventc-hero-onboarding.webp";
import imgTickets    from "../../assets/yyventc-tickets.webp";
import imgEnmax      from "../../assets/76f0998bf47cdb906db55598c4c600e18a2ac8fb.webp";
import imgTrumi      from "../../assets/trumi-hero.webp";

const relatedImageMap: Record<string, string> = {
  enmax: imgEnmax,
  trumi: imgTrumi,
};

const sections = content.contributions.sections;

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
          <div className={styles.heroImageWrap}>
            <FadeInImage
              src={imgHero}
              alt="YYventC — onboarding and account creation flow"
              className={styles.heroImgDesktop}
              loading="eager"
            />
            <FadeInImage
              src={imgOnboarding}
              alt="YYventC — welcome screen"
              className={styles.heroImgMobile}
              loading="eager"
            />
            <div className={styles.heroOverlay} />
            <div className={styles.heroText}>
              <div className={styles.heroTextBox}>
                <h1 className={styles.heroTitle}>{content.hero.title}</h1>
                <p className={styles.heroSubtitle}>{content.hero.subtitle}</p>
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

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── My Contributions — overview + IA + Nav ────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.contributions.title}</h2>
            <div className={styles.bodyText}>
              <p>{content.contributions.intro}</p>
            </div>

            {/* Key screens overview figure */}
            <figure className={styles.wideFigure}>
              <div className={styles.wideFigureImgWrap}>
                <FadeInImage
                  src={imgKeyScreens}
                  alt="YYventC key screens: Discover, Tickets, Friends, and Yvents social feed"
                  className={styles.wideFigureImg}
                />
              </div>
              <figcaption className={styles.figCaption}>
                The four core experiences are Discover, Tickets, Friends, and Yvents.
              </figcaption>
            </figure>

          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Discover Page ─────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{sections[2].heading}</h2>
            <div className={styles.bodyText}><p>{sections[2].body}</p></div>
            <figure className={styles.phoneFigure}>
              <div className={styles.phoneImgWrap}>
                <FadeInImage
                  src={imgDiscover}
                  alt="YYventC Discover feed showing location-aware event surfacing"
                  className={styles.phoneImg}
                />
              </div>
              <figcaption className={styles.figCaption}>
                The Discover feed surfaces location-aware events with minimal friction, making the right events impossible to miss.
              </figcaption>
            </figure>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Social / Yvents ───────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{sections[3].heading}</h2>
            <div className={styles.bodyText}><p>{sections[3].body}</p></div>
            <figure className={styles.phoneFigure}>
              <div className={styles.phoneImgWrap}>
                <FadeInImage
                  src={imgCommunity}
                  alt="YYventC Yvents feed showing friends activity and community posts"
                  className={styles.phoneImg}
                />
              </div>
              <figcaption className={styles.figCaption}>
                The Yvents feed brings together friends' activity and real attendee posts, turning event discovery into a social experience.
              </figcaption>
            </figure>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Signed-in vs. Signed-out Flows ───────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{sections[4].heading}</h2>
            <div className={styles.bodyText}><p>{sections[4].body}</p></div>
            <figure className={styles.dualPhoneFigure}>
              <div className={styles.dualPhoneImgWrap}>
                <FadeInImage
                  src={imgOnboarding}
                  alt="YYventC welcome screen and onboarding flow"
                  className={styles.dualPhoneImg}
                />
                <FadeInImage
                  src={imgTickets}
                  alt="YYventC tickets screen showing upcoming and past events"
                  className={styles.dualPhoneImg}
                />
              </div>
              <figcaption className={styles.figCaption}>
                The welcome screen on the left features deliberate onboarding copy. The signed-in tickets view on the right shows upcoming and past events.
              </figcaption>
            </figure>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Reflection ───────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.reflection.title}</h2>
            <div className={styles.bodyText}>
              <p>{content.reflection.paragraphs[0]}</p>
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
                  <div className={proj.imageType === "square" ? styles.relatedCardImageSquare : styles.relatedCardImage}>
                    <FadeInImage
                      src={relatedImageMap[proj.imageKey]}
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
