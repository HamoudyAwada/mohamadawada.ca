import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Button from "../components/Button";
import imgHeadshot from "../../assets/83f4de12679ccac2d92d82eb66f087549d1db709.webp";
import projects from "../../data/projects";
import homeContent from "../../content/home.json";
import styles from "./Home.module.css";

const featuredProjects = projects.filter((p) => p.featured);

export default function Home() {
  const { hero, workSection, processSection, resumeSection } = homeContent;

  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>
        {/* Hero Section */}
        <HeroSection
          image={imgHeadshot}
          title={hero.title}
          description={hero.description}
          ctaLabel={hero.cta.label}
          ctaHref={hero.cta.href}
        />

        <Divider />

        {/* My Work Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <SectionHeading
              title={workSection.title}
              description={workSection.description}
              cta={{
                label: workSection.cta.label,
                href: workSection.cta.href,
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
              <h2 className={styles.processTitle}>{processSection.title}</h2>
              <p className={styles.processDescription}>{processSection.description}</p>
              <div className={styles.processButtons}>
                <Button variant="primary" size="large" href={processSection.cta.href}>
                  {processSection.cta.label}
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
              <h2 className={styles.resumeTitle}>{resumeSection.title}</h2>
              <p className={styles.resumeDescription}>{resumeSection.description}</p>
              <div className={styles.resumeButtons}>
                <Button
                  variant="primary"
                  size="large"
                  href={resumeSection.cta.href}
                  target="_blank"
                >
                  {resumeSection.cta.label}
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
