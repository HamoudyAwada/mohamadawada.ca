import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import resumeContent from "../../content/resume.json";
import styles from "./Resume.module.css";

export default function Resume() {
  const { hero } = resumeContent;

  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>
          <Button variant="primary" size="large" href={hero.cta.href} target="_blank">
            {hero.cta.label}
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
