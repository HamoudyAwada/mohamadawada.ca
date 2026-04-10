import { Fragment } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import Button from "../components/Button";
import imgEnmax from "../../assets/76f0998bf47cdb906db55598c4c600e18a2ac8fb.png";
import imgTrumi from "../../assets/ab72dd35391820c5919d41bb47e2f9abe185f5e4.png";
import styles from "./Work.module.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageType: "cropped" | "square";
  imageFirst: boolean;
  href: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ENMAX Design System",
    description:
      "Understand how I helped shape ENMAX's design system and set the foundation for powerful AI assisted workflows.",
    image: imgEnmax,
    imageAlt: "ENMAX Design System",
    imageType: "cropped",
    imageFirst: true,
    href: "/my-work",
  },
  {
    id: 2,
    title: "Trumi",
    description:
      "A gamified app to help you actually achieve your goals and understand your values.",
    image: imgTrumi,
    imageAlt: "Trumi App",
    imageType: "square",
    imageFirst: false,
    href: "/my-work",
  },
  {
    id: 3,
    title: "YYventC",
    description:
      "A community-driven events platform built to connect people in Calgary with local experiences.",
    image: imgEnmax,
    imageAlt: "YYventC",
    imageType: "cropped",
    imageFirst: true,
    href: "/my-work",
  },
];

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
          <Fragment key={project.id}>
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
                    src={project.image}
                    alt={project.imageAlt}
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
                  <Button variant="primary" size="large" href={project.href}>
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
