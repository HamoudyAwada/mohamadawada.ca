import HeroSkeleton from "../HeroSkeleton";
import CopyBlockSkeleton from "../CopyBlockSkeleton";
import ProjectCardSkeleton from "../ProjectCardSkeleton";
import styles from "./PageSkeleton.module.css";

interface PageSkeletonProps {
  variant?: "home" | "contact" | "generic";
}

export default function PageSkeleton({ variant = "generic" }: PageSkeletonProps) {
  if (variant === "home") {
    return (
      <div className={styles.page}>
        <HeroSkeleton />
        
        <section className={styles.section}>
          <div className={styles.projectGrid}>
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
          </div>
        </section>

        <section className={styles.section}>
          <CopyBlockSkeleton imagePosition="left" />
        </section>

        <section className={styles.section}>
          <CopyBlockSkeleton imagePosition="right" />
        </section>
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <div className={styles.page}>
        <div className={styles.contactHeader}>
          <div className={styles.contactTitle} />
          <div className={styles.contactSubtitle} />
        </div>
        <div className={styles.contactForm}>
          <div className={styles.formField} />
          <div className={styles.formField} />
          <div className={styles.formField} />
          <div className={styles.formButton} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <HeroSkeleton />
    </div>
  );
}
