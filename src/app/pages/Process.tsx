import processDiagram from '../../assets/0191a5b5151fbbffdac8e9a28bb15384029781f4.png'
import { Link } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <div className={styles.page}>
      <Navigation />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>My Process</h1>
            <p className={styles.subtitle}>
              In an age where the how and the why matter more than ever, here is what my process looks like.
            </p>
          </div>
        </section>

        <Divider />

        {/* Content Section - Two Column Layout */}
        <section className={styles.contentSection}>
          <div className={styles.twoColumnLayout}>
            {/* Left Column - Text Content */}
            <div className={styles.leftColumn}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>How I Approach My Work</h2>
                <p className={styles.sectionSubtitle}>
                  Forming hypotheses, building what's needed to test them, and letting real user feedback drive every decision.
                </p>

                <div className={styles.bodyText}>
                  <p>
                    Lean UX is my preferred approach to product design. I'm drawn to its emphasis on rapid experimentation, continuous user feedback, and tight collaboration between designers, developers, and stakeholders. Building, measuring, and learning in short cycles helps me stay focused on real user needs rather than getting stuck in heavy documentation or upfront assumptions.
                  </p>

                  <p>
                    That said, I'm comfortable adapting to whatever methodology a team relies on. I've worked within Agile and Scrum environments, and I understand how Waterfall can still make sense for projects with fixed scopes or strict compliance requirements. What matters most to me is contributing effectively to the team's workflow, not defending a single way of working.
                  </p>

                  <p>
                    At the end of the day, methodologies are tools, not rules. I care more about shipping thoughtful, user-centred work than following any one process by the book. Whether a team moves fast and iterates or plans carefully from the start, I'm ready to meet them where they are and bring the same level of craft and curiosity to the work.
                  </p>

                  
                </div>

                <div className={styles.ctaSection}>
                  <Link to="/contact" className={styles.ctaButton}>
                    Let's Work Together
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Diagram */}
            <div className={styles.rightColumn}>
              <div className={styles.diagramContainer}>
                {/* Process Diagram Image */}
                <img 
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