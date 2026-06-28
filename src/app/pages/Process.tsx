import processDiagram from '../../assets/0191a5b5151fbbffdac8e9a28bb15384029781f4.webp';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import FadeInImage from "../components/FadeInImage";
import processContent from "../../content/process.json";
import styles from "./Process.module.css";

export default function Process() {
  const { hero, approach, diagram, principles, cta } = processContent;

  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>

        {/* ── Hero ─────────────────────────────────── */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{hero.title}</h1>
            <p className={styles.heroSubtitle}>{hero.subtitle}</p>
          </div>
        </section>

        <Divider />

        {/* ── Approach + Diagram ───────────────────── */}
        <section className={styles.approachSection}>
          <div className={styles.approachText}>
            <h2 className={styles.approachTitle}>{approach.title}</h2>
            <p className={styles.approachBody}>{approach.body}</p>
          </div>
          <div className={styles.diagramWrap}>
            <FadeInImage
              src={processDiagram}
              alt={diagram.alt}
              className={styles.diagram}
            />
            <p className={styles.diagramCaption}>{diagram.caption}</p>
          </div>
        </section>

        <Divider />

        {/* ── Principles ───────────────────────────── */}
        <section className={styles.principlesSection}>
          {principles.map((p) => (
            <div key={p.heading} className={styles.principle}>
              <h3 className={styles.principleHeading}>{p.heading}</h3>
              <p className={styles.principleBody}>{p.body}</p>
            </div>
          ))}

        </section>

      </main>

      <Footer />
    </div>
  );
}
