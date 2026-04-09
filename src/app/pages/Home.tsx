import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Button from "../components/Button";
import imgHeadshot from "../../assets/83f4de12679ccac2d92d82eb66f087549d1db709.png";
import imgEnmax from "../../assets/76f0998bf47cdb906db55598c4c600e18a2ac8fb.png";
import imgTrumi from "../../assets/ab72dd35391820c5919d41bb47e2f9abe185f5e4.png";
import svgPaths from "../../imports/Frame179/svg-0m3zegtu1n";
import styles from "./Home.module.css";

export default function Home() {
  const projectCards = [
    {
      id: 1,
      image: imgEnmax,
      title: "ENMAX DESIGN SYSTEM",
      description:
        "How I helped shape ENMAX's design system and set the foundation for powerful AI assisted workflows.",
      tags: [
        { label: "Figma MCP", variant: "primary" as const },
        { label: "Design System", variant: "secondary" as const },
        { label: "AI", variant: "purple" as const },
      ],
      badge: "ENMAX - Project",
      href: "/my-work",
    },
    {
      id: 2,
      image: imgTrumi,
      title: "TRUMI",
      description:
        "A gamified app to help you actually achieve your goals and understand your values.",
      tags: [
        { label: "Capstone", variant: "primary" as const },
        { label: "App", variant: "secondary" as const },
        { label: "AI UX - Claude", variant: "purple" as const },
      ],
      badge: "SAIT - Capstone",
      href: "/my-work",
    },
  ];

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
            {projectCards.map((project) => (
              <ProjectCard key={project.id} {...project} />
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
