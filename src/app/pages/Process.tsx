import processDiagram from '../../assets/0191a5b5151fbbffdac8e9a28bb15384029781f4.webp'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import Button from "../components/Button";
import FadeInImage from "../components/FadeInImage";
import processContent from "../../content/process.json";
import styles from "./Process.module.css";

export default function Process() {
  const { hero, content } = processContent;

  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>{hero.title}</h1>
            <p className={styles.subtitle}>{hero.subtitle}</p>
          </div>
        </section>

        <Divider />

        {/* Content Section - Two Column Layout */}
        <section className={styles.contentSection}>
          <div className={styles.twoColumnLayout}>
            {/* Left Column - Text Content */}
            <div className={styles.leftColumn}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>{content.title}</h2>
                <p className={styles.sectionSubtitle}>{content.subtitle}</p>

                <div className={styles.bodyText}>
                  {content.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className={styles.ctaSection}>
                  <Button variant="primary" size="large" href={content.cta.href}>
                    {content.cta.label}
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Diagram */}
            <div className={styles.rightColumn}>
              <div className={styles.diagramContainer}>
                <FadeInImage
                  src={processDiagram}
                  alt="Lean UX Process Diagram showing the cycle of Think, Make, and Check with Lean UX at the center"
                  className={styles.diagram}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
