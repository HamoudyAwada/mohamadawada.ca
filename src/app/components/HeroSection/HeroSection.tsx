import Button from "../Button";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  image: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function HeroSection({
  image,
  title,
  description,
  ctaLabel,
  ctaHref,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <img src={image} alt="Mohamad Awada" className={styles.image} />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>
          <Button variant="primary" size="large" href={ctaHref}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
