import { Fragment } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import Button from "../components/Button";
import projects from "../../data/projects";
import styles from "./Work.module.css";

export default function Work() {
  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Explore My Work</h1>
              <p className={styles.heroDescription}>
                From enterprise level, AI-integrated design systems, to
                end-to-end app design, discover some of my projects.
              </p>
            </div>
            <Button variant="primary" size="large" href="/contact">
              Let's Work Together
            </Button>
          </div>
        </section>

        {/* Project Rows */}
        {projects.map((project) => (
          <Fragment key={project.slug}>
            <Divider />
            <section className={styles.projectSection}>
              <div
                className={`${styles.projectRow} ${
                  !project.imageFirst ? styles.projectRowReverse : ""
                }`}
              >
                <div
                  className={`${styles.projectImageWrapper} ${
                    project.imageType === "square"
                      ? styles.imageSquare
                      : styles.imageCropped
                  }`}
                >
                  <img
                    src={project.coverImage}
                    alt={project.coverImageAlt}
                    className={styles.projectImg}
                  />
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectText}>
                    <h1 className={styles.projectTitle}>{project.title}</h1>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                  </div>
                  <Button
                    variant="primary"
                    size="large"
                    href={`/my-work/${project.slug}`}
                  >
                    See More
                  </Button>
                </div>
              </div>
            </section>
          </Fragment>
        ))}
      </main>

      <Footer />
    </div>
  );
}
