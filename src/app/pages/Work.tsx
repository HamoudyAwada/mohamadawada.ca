import { Link } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Tag from "../components/Tag";
import FadeInImage from "../components/FadeInImage";
import projects from "../../data/projects";
import workContent from "../../content/work.json";
import styles from "./Work.module.css";

export default function Work() {
  const { hero } = workContent;
  const published = projects.filter((p) => p.status === "published");

  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>

        {/* ── Page Header ───────────────────────────────── */}
        <header className={styles.pageHeader}>
          <div className={styles.pageHeaderInner}>
            <h1 className={styles.pageTitle}>{hero.title}</h1>
            <p className={styles.pageSubtitle}>{hero.description}</p>
            <span className={styles.projectCount}>{published.length} case studies</span>
          </div>
        </header>

        {/* ── Numbered list ─────────────────────────────── */}
        <section className={styles.listSection}>
          <div className={styles.listInner}>
            {published.map((project, index) => (
              <Link
                key={project.slug}
                to={`/my-work/${project.slug}`}
                className={styles.projectRow}
              >
                <span className={styles.projectNum}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className={styles.projectInfo}>
                  <span className={styles.badge}>{project.badge}</span>
                  <h2 className={styles.title}>{project.title}</h2>
                  <p className={styles.desc}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.slice(0, 3).map((t) => (
                      <Tag key={t.label} variant={t.variant}>{t.label}</Tag>
                    ))}
                  </div>
                  <span className={styles.cta}>{project.ctaLabel} →</span>
                </div>

                <div
                  className={styles.thumbnail}
                  style={project.coverImageBg ? { backgroundColor: project.coverImageBg } : undefined}
                >
                  <FadeInImage
                    src={project.coverImage}
                    alt={project.coverImageAlt}
                    className={project.imageType === "square" ? styles.thumbImgSquare : styles.thumbImgCover}
                  />
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
