import { ArrowDown } from "lucide-react";
import Button from "../Button";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  title: string;
  description?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export default function HeroSection({ title, description, ctaLabel, onCtaClick }: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
        {ctaLabel && onCtaClick && (
          <Button variant="ghost" size="medium" onClick={onCtaClick} icon={<ArrowDown size={16} />}>
            {ctaLabel}
          </Button>
        )}
      </div>
    </section>
  );
}
