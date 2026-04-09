import { ReactNode } from "react";
import Button from "../Button";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  title: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  };
  align?: "left" | "center";
  mobileCentered?: boolean;
}

export default function SectionHeading({
  title,
  description,
  cta,
  align = "left",
  mobileCentered = false,
}: SectionHeadingProps) {
  const containerClasses = [
    styles.container,
    styles[align],
    mobileCentered ? styles.mobileCentered : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {cta && (
        <div className={styles.cta}>
          <Button variant={cta.variant || "primary"} size="large" href={cta.href}>
            {cta.label}
          </Button>
        </div>
      )}
    </div>
  );
}
