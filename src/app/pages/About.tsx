import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Divider from "../components/Divider";
import Tag from "../components/Tag";
import FadeInImage from "../components/FadeInImage";
import styles from "./About.module.css";
import { ArrowDown, CheckCircle2, Package, TrendingUp } from "lucide-react";
import aboutContent from "../../content/about.json";

// Import images from Figma
import imgOutsideDesignPhoto from "../../assets/me-as-me.webp";
import imgDesignerPhoto from "../../assets/a08415ea1b476b514183ff36dccdcb4995628663.webp";

const valueIconMap: Record<string, JSX.Element> = {
  "check-circle": <CheckCircle2 size={24} color="var(--primary-foreground)" />,
  "package":      <Package size={24} color="var(--primary-foreground)" />,
  "trending-up":  <TrendingUp size={24} color="var(--primary-foreground)" />,
};

export default function About() {
  const { hero, designerSection, outsideDesignSection, valuesSection } = aboutContent;

  const handleSkipToValues = () => {
    const valuesEl = document.getElementById("design-values");
    if (valuesEl) {
      valuesEl.scrollIntoView({ behavior: "smooth" });
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
              <h1 className={styles.heroTitle}>{hero.title}</h1>
              <p className={styles.heroSubtitle}>{hero.subtitle}</p>
              <Button
                variant="primary"
                size="large"
                onClick={handleSkipToValues}
                icon={<ArrowDown size={16} />}
              >
                {hero.cta}
              </Button>
            </div>
          </section>

          <Divider />

          {/* Who I Am As A Designer Section */}
          <section className={styles.designerSection}>
            <h2 className={styles.sectionTitle}>{designerSection.title}</h2>
            <div className={styles.designerImage}>
              <FadeInImage src={imgDesignerPhoto} alt="Mohamad Awada as a designer" />
            </div>
            <div className={styles.designerText}>
              {designerSection.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          {/* Who I Am Outside Of Design Section */}
          <section className={styles.outsideDesignSection}>
            <h2 className={styles.outsideDesignTitle}>{outsideDesignSection.title}</h2>
            <div className={styles.outsideDesignImage}>
              <FadeInImage
                src={imgOutsideDesignPhoto}
                alt="Mohamad Awada outside of design"
                className={styles.outsideDesignPhoto}
              />
            </div>
            <div className={styles.outsideDesignText}>
              {outsideDesignSection.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <Divider />

          {/* Design Values Section */}
          <section id="design-values" className={styles.valuesSection}>
            <div className={styles.valuesHeader}>
              <h2 className={styles.valuesTitle}>{valuesSection.title}</h2>
              <p className={styles.valuesSubtitle}>{valuesSection.subtitle}</p>
              <div className={styles.valuesButton}>
                <Button variant="primary" size="large" href={valuesSection.cta.href}>
                  {valuesSection.cta.label}
                </Button>
              </div>
            </div>

            {/* Values Cards */}
            <div className={styles.valuesGrid}>
              {valuesSection.values.map((value) => (
                <div key={value.name} className={styles.valueCard}>
                  <div className={styles.valueHeader}>
                    <div className={styles.valueIcon}>
                      {valueIconMap[value.icon]}
                    </div>
                    <h3 className={styles.valueName}>{value.name}</h3>
                  </div>
                  <div className={styles.valueDivider}>
                    <svg width="100%" height="2" fill="none" preserveAspectRatio="none" viewBox="0 0 315 2">
                      <path d="M1 1H314" stroke="var(--accent)" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <p className={styles.valueDescription}>{value.description}</p>
                  <div className={styles.valueTags}>
                    {value.tags.map((tag) => (
                      <Tag key={tag.label} variant={tag.variant as "primary" | "secondary" | "tertiary" | "purple" | "red"}>
                        {tag.label}
                      </Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
