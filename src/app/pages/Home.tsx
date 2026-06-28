import { useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import MoeSignature from "../components/MoeSignature";
import SectionHeading from "../components/SectionHeading";
import ProjectTile from "../components/ProjectTile";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import projects from "../../data/projects";
import homeContent from "../../content/home.json";
import { arrowRight } from "../data/svgPaths";
import styles from "./Home.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const { hero, workSection } = homeContent;
  const [enmax, trumi, yyventc] = projects;
  const bentoGridRef = useRef<HTMLDivElement>(null);

  const handleScrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  useGSAP(
    () => {
      const grid = bentoGridRef.current;
      if (!grid) return;

      gsap.from(grid.children, {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: grid,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: bentoGridRef }
  );

  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>
        {/* Hero Section */}
        <HeroSection
          title={hero.title}
          description={hero.description}
          ctaLabel={hero.cta}
          onCtaClick={handleScrollToWork}
        />

        {/* Moe Signature */}
        <div className={styles.signatureSection}>
          <div className={styles.signatureSvgWrapper}>
            <MoeSignature />
          </div>
        </div>

        <Divider />

        {/* My Work Section */}
        <section id="work" className={styles.section}>
          <div className={styles.workGrid}>
            <div className={styles.workHeading}>
              <SectionHeading title={workSection.title} mobileCentered />
              <Link
                to={workSection.cta.href}
                className={`${styles.seeAllLink} ${styles.seeAllDesktop}`}
              >
                {workSection.cta.label}
                <svg viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={arrowRight} fill="currentColor" />
                </svg>
              </Link>
            </div>

            <div className={styles.bentoGridWrapper}>
              <div className={styles.bentoGrid} ref={bentoGridRef}>
                <ProjectTile
                  className={styles.cellLarge}
                  image={enmax.coverImage}
                  imageAlt={enmax.coverImageAlt}
                  imageType={enmax.imageType}
                  imageBg={enmax.coverImageBg}
                  title={enmax.title}
                  href={`/my-work/${enmax.slug}`}
                />
                <ProjectTile
                  className={styles.cellSmall1}
                  image={yyventc.coverImage}
                  imageAlt={yyventc.coverImageAlt}
                  imageType={yyventc.imageType}
                  imageBg={yyventc.coverImageBg}
                  title={yyventc.title}
                  href={`/my-work/${yyventc.slug}`}
                />
                <ProjectTile
                  className={styles.cellSmall2}
                  image={trumi.coverImage}
                  imageAlt={trumi.coverImageAlt}
                  imageType={trumi.imageType}
                  imageBg={trumi.coverImageBg}
                  title={trumi.title}
                  href={`/my-work/${trumi.slug}`}
                />
                <ProjectTile className={styles.cellSmall3} title="Coming Soon" placeholder />
                <ProjectTile className={styles.cellSmall4} title="Coming Soon" placeholder />
              </div>
            </div>

            <Link
              to={workSection.cta.href}
              className={`${styles.seeAllLink} ${styles.seeAllMobile}`}
            >
              {workSection.cta.label}
              <svg viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={arrowRight} fill="currentColor" />
              </svg>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
