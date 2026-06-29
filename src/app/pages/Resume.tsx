import { Link } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Tag from "../components/Tag";
import resumeContent from "../../content/resume.json";
import styles from "./Resume.module.css";

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2v8M4 7l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Resume() {
  const { hero, experience, education, projects, skills } = resumeContent;

  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>
        <div className={styles.inner}>

          {/* ── Page Header ─────────────────────────── */}
          <header className={styles.header}>
            <div className={styles.headerText}>
              <h1 className={styles.pageTitle}>{hero.title}</h1>
              <p className={styles.pageSubtitle}>{hero.subtitle}</p>
            </div>
            <Button
              variant="ghost"
              size="medium"
              href={hero.cta.href}
              target="_blank"
              icon={<DownloadIcon />}
            >
              {hero.cta.label}
            </Button>
          </header>

          <hr className={styles.rule} />

          {/* ── Experience ──────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>Experience</h2>
            <div className={styles.entryList}>
              {experience.map((job) => (
                <div key={job.company} className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <div className={styles.entryTitleRow}>
                      <span className={styles.entryOrg}>{job.company}</span>
                      {job.current && (
                        <span className={styles.currentBadge}>Current</span>
                      )}
                    </div>
                    <span className={styles.entryPeriod}>{job.period}</span>
                  </div>
                  <div className={styles.entrySubheader}>
                    <span className={styles.entryRole}>{job.role}</span>
                    <span className={styles.entryLocation}>{job.location}</span>
                  </div>
                  <ul className={styles.bullets}>
                    {job.bullets.map((b, i) => (
                      <li key={i} className={styles.bullet}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <hr className={styles.rule} />

          {/* ── Education ───────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>Education</h2>
            <div className={styles.entryList}>
              {education.map((edu) => (
                <div key={edu.institution} className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <span className={styles.entryOrg}>{edu.institution}</span>
                    <span className={styles.entryPeriod}>{edu.period}</span>
                  </div>
                  <div className={styles.entrySubheader}>
                    <span className={styles.entryRole}>{edu.credential}</span>
                    <span className={styles.entryLocation}>{edu.location}</span>
                  </div>
                  <div className={styles.eduFooter}>
                    <div className={styles.gpaBlock}>
                      <span className={styles.gpaNumber}>{edu.gpa}</span>
                      <span className={styles.gpaDenom}>/ {edu.gpaMax} GPA</span>
                    </div>
                    <div className={styles.coursework}>
                      {edu.coursework.map((c) => (
                        <Tag key={c} variant="tertiary">{c}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className={styles.rule} />

          {/* ── Projects ────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>Projects</h2>
            <div className={styles.entryList}>
              {projects.map((proj) => (
                <div key={proj.slug} className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <div className={styles.entryTitleRow}>
                      <span className={styles.entryOrg}>{proj.title}</span>
                      <span className={styles.projSubtitle}>{proj.subtitle}</span>
                    </div>
                    <div className={styles.projHeaderRight}>
                      <span className={styles.entryPeriod}>{proj.period}</span>
                      <Link to={`/my-work/${proj.slug}`} className={styles.projLink}>
                        View Case Study
                        <span className={styles.projLinkIcon}><ArrowRightIcon /></span>
                      </Link>
                    </div>
                  </div>
                  <ul className={styles.bullets}>
                    {proj.bullets.map((b, i) => (
                      <li key={i} className={styles.bullet}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <hr className={styles.rule} />

          {/* ── Skills ──────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>Technologies &amp; Skills</h2>
            <div className={styles.skillsGrid}>
              <div className={styles.skillGroup}>
                <span className={styles.skillGroupLabel}>Technologies</span>
                <div className={styles.tagRow}>
                  {skills.technologies.map((t) => (
                    <Tag key={t} variant="purple">{t}</Tag>
                  ))}
                </div>
              </div>
              <div className={styles.skillGroup}>
                <span className={styles.skillGroupLabel}>Skills</span>
                <div className={styles.tagRow}>
                  {skills.design.map((s) => (
                    <Tag key={s} variant="secondary">{s}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <hr className={styles.rule} />

          {/* ── CTA ─────────────────────────────────── */}
          <div className={styles.ctaSection}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaHeading}>Like what you see?</h2>
              <p className={styles.ctaBody}>Whether you have a role in mind or just want to talk shop, my inbox is open.</p>
            </div>
            <Button variant="ghost" size="large" href="/contact">
              Let's Work Together
            </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
