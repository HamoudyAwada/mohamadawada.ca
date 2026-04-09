import Button from "../Button";
import styles from "./CopyBlock.module.css";
import figmaImage from "../../assets/0e034e7e1db3ad4332be338ebec0f487a15c69f5.png";

interface CopyBlockProps {
  image: string;
  imageAlt: string;
  title: string;
  content: string;
  ctaLabel?: string;
  ctaHref?: string;
  imagePosition?: "left" | "right";
}

export default function CopyBlock({
  image,
  imageAlt,
  title,
  content,
  ctaLabel,
  ctaHref,
  imagePosition = "left",
}: CopyBlockProps) {
  return (
    <div className={`${styles.container} ${styles[imagePosition]}`}>
      <div className={styles.imageWrapper}>
        <img src={figmaImage} alt={imageAlt} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.description}>{content}</div>
        </div>

        {ctaLabel && ctaHref && (
          <div className={styles.cta}>
            <Button variant="primary" size="large" href={ctaHref}>
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}