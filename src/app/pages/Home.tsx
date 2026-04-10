import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Button from "../components/Button";
import imgHeadshot from "../../assets/83f4de12679ccac2d92d82eb66f087549d1db709.png";
import svgPaths from "../../imports/Frame179/svg-0m3zegtu1n";
import projects from "../../data/projects";
import styles from "./Home.module.css";

const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>
        {/* Hero Section */}
        <HeroSection
          image={imgHeadshot}
          title="Hey There, It's Moe!"
          description="I design experiences that actually matter to people, and I try to bring that same honesty and warmth to everything I do."
          ctaLabel="Let's Work Together"
          ctaHref="/contact"
        />

        <Divider />

        {/* My Work Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <SectionHeading
              title="My Work"
              description="Here are a few of my featured projects. See the full list by clicking below!"
              cta={{
                label: "See My Work",
                href: "/my-work",
              }}
              mobileCentered
            />
          </div>

          <div className={styles.projectGrid}>
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                image={project.coverImage}
                title={project.title}
                description={project.description}
                tags={project.tags}
                badge={project.badge}
                href={`/my-work/${project.slug}`}
              />
            ))}
          </div>
        </section>

        <Divider />

        {/* My Process Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <div className={styles.processSection}>
              <h2 className={styles.processTitle}>My Process</h2>
              <p className={styles.processDescription}>
                As the drive behind every project, if you're more interested in the how and the why, I give a pretty comprehensive rundown of what that means for me.
              </p>
              <div className={styles.processButtons}>
                <Button variant="primary" size="large" href="/process">
                  Understand My Process
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Resume Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <div className={styles.resumeSection}>
              <h2 className={styles.resumeTitle}>Resume</h2>
              <p className={styles.resumeDescription}>
                If you're looking for my professional qualifications and resume, you're in the right place. Download my resume directly as a PDF.
              </p>
              <div className={styles.resumeButtons}>
                <Button
                  variant="primary"
                  size="large"
                  href="/resume.pdf"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                      <path
                        d={svgPaths.p329a7280}
                        fill="currentColor"
                      />
                    </svg>
                  }
                  iconPosition="right"
                >
                  Download Resume
                </Button>
                <Button
                  variant="secondary"
                  size="large"
                  href="/contact"
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
