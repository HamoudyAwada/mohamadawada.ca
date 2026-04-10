import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Divider from "../components/Divider";
import Tag from "../components/Tag";
import styles from "./About.module.css";
import { ArrowDown, CheckCircle2, Package, TrendingUp } from "lucide-react";

// Import images from Figma
import imgOutsideDesignPhoto from "../../imports/DesktopAbout/92942cb3c2096543651f0997eaffe7b01f2f6ca6.png";
import imgMobileHero from "../../imports/MobileAbout/82eb2203f4a6d5637e33003ec7a1ec84d136538d.png";
import imgDesignerPhoto from "../../assets/a08415ea1b476b514183ff36dccdcb4995628663.png";

export default function About() {
  const handleSkipToValues = () => {
    const valuesSection = document.getElementById('design-values');
    if (valuesSection) {
      valuesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navigation />
      <div className={styles.page}>
        <main className={styles.main}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Who Is Moe?</h1>
              <p className={styles.heroSubtitle}>This is the space to get an initial look into who I am and if I'd be a good fit for you or your team!</p>
              <Button
                variant="primary"
                size="large"
                onClick={handleSkipToValues}
                icon={<ArrowDown size={16} />}
              >
                Skip To My Design Values
              </Button>
            </div>
          </section>

          <Divider />

          {/* Who I Am As A Designer Section */}
          <section className={styles.designerSection}>
            <div className={styles.designerContent}>
              <h2 className={styles.sectionTitle}>Who I Am As A Designer</h2>
              <div className={styles.designerImage}>
                <img src={imgDesignerPhoto} alt="Mohamad Awada as a designer" />
              </div>
              <div className={styles.designerText}>
                <p>Something we're losing, and losing fast, is personality. In a time when so much has become automated and things become more efficient in so short a time that processes literally change between the time you clock in and clock out, how do we actually define what makes a good designer?</p>
                <p>I believe that increasingly so, we are beginning to almost exclusively prioritize the how and the why. That's why the reason behind the design holds immense importance to me as a designer. Aside from the metrics and numbers (which are still important!) I'd like to think that placing more emphasis on the person sitting on the other side of the screen is what actually separates good design from great design.</p>
                <p>Because at the end of the day, I'm not designing for dashboards or deliverables. I'm designing for the person who just had a long day and needs something to just work. For the person who feels overwhelmed and needs to feel guided. I got into this field because I love knowing that at the end of what doing, I'm helping a real person, and I genuinely care about making their lives a little easier.</p>
              </div>
            </div>
          </section>

          {/* Who I Am Outside Of Design Section */}
          <section className={styles.outsideDesignSection}>
            <div className={styles.outsideDesignImage}>
              <img src={imgOutsideDesignPhoto} alt="Mohamad Awada outside of design" className={styles.outsideDesignPhoto} />
            </div>
            <div className={styles.outsideDesignContent}>
              <h2 className={styles.sectionTitle}>Who I Am Outside Of Design</h2>
              <div className={styles.outsideDesignText}>
                <p>Summing myself up in a few sentences is tough, but I'll do my best. I've always carried a mix of analytical and creative energy. One side takes over in waves, but I always find a way to balance them back out. I have a natural curiosity for life, a desire to experience, understand, and learn. I lean extroverted day-to-day, but I can read a room and adapt without issue.</p>
                <p>I love sports and video games. I've played badminton my whole life, but volleyball has been my main thing the past few years. On the gaming side, I grew up on Pokémon and have been playing since I was four. I have less time for these things now, which only makes the time I do get all the more valuable.</p>
                <p>I'm still figuring a lot out about myself. I have a growth-oriented mindset and am looking for the right place to fulfill that growth.</p>
              </div>
            </div>
          </section>

          <Divider />

          {/* Design Values Section */}
          <section id="design-values" className={styles.valuesSection}>
            <div className={styles.valuesHeader}>
              <h2 className={styles.valuesTitle}>Some of My Design Values</h2>
              <p className={styles.valuesSubtitle}>
                If you'd like to know more about the way I work and how I fit with different project methodologies, check out my process.
              </p>
              <div className={styles.valuesButton}>
                <Button variant="primary" size="large" href="/process">
                  Check Out My Process
                </Button>
              </div>
            </div>

            {/* Values Cards */}
            <div className={styles.valuesGrid}>
              {/* Systems Thinking */}
              <div className={styles.valueCard}>
                <div className={styles.valueHeader}>
                  <div className={styles.valueIcon}>
                    <CheckCircle2 size={24} color="var(--primary-foreground)" />
                  </div>
                  <h3 className={styles.valueName}>Systems Thinking</h3>
                </div>
                <div className={styles.valueDivider}>
                  <svg width="100%" height="2" fill="none" preserveAspectRatio="none" viewBox="0 0 315 2">
                    <path d="M1 1H314" stroke="var(--accent)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
                <p className={styles.valueDescription}>I think in systems, not in individual designs. I build design systems with semantic token architecture, documented decisions, and room to scale. Every decision is part of a larger system between the design and the people who build interact with it.</p>
                <div className={styles.valueTags}>
                  <Tag variant="primary">Design Systems</Tag>
                  <Tag variant="secondary">Documentation</Tag>
                  <Tag variant="purple">Information Architecture</Tag>
                </div>
              </div>

              {/* Product Design */}
              <div className={styles.valueCard}>
                <div className={styles.valueHeader}>
                  <div className={styles.valueIcon}>
                    <Package size={24} color="var(--primary-foreground)" />
                  </div>
                  <h3 className={styles.valueName}>Product Design</h3>
                </div>
                <div className={styles.valueDivider}>
                  <svg width="100%" height="2" fill="none" preserveAspectRatio="none" viewBox="0 0 315 2">
                    <path d="M1 1H314" stroke="var(--accent)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
                <p className={styles.valueDescription}>
                  End-to-end product design from concept to handoff. I build interaction patterns, component libraries, and high-fidelity prototypes that developers can actually build from. My work survives contact with reality.
                </p>
                <div className={styles.valueTags}>
                  <Tag variant="primary">Figma</Tag>
                  <Tag variant="secondary">Prototyping</Tag>
                  <Tag variant="purple">AI UX</Tag>
                  <Tag variant="red">Developer Handoff</Tag>
                </div>
              </div>

              {/* UX Research */}
              <div className={styles.valueCard}>
                <div className={styles.valueHeader}>
                  <div className={styles.valueIcon}>
                    <TrendingUp size={24} color="var(--primary-foreground)" />
                  </div>
                  <h3 className={styles.valueName}>UX Research</h3>
                </div>
                <div className={styles.valueDivider}>
                  <svg width="100%" height="2" fill="none" preserveAspectRatio="none" viewBox="0 0 315 2">
                    <path d="M1 1H314" stroke="var(--accent)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
                <p className={styles.valueDescription}>
                  Contextual interviews, usability testing, competitive audits, heuristic reviews, and synthesis. I start every project by understanding people and processes, not by working with assumptions.
                </p>
                <div className={styles.valueTags}>
                  <Tag variant="primary">Quantitative Research</Tag>
                  <Tag variant="purple">Usability Testing</Tag>
                  <Tag variant="red">Research Synthesis</Tag>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}