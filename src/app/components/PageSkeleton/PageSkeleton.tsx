import HeroSkeleton from "../HeroSkeleton";
import Skeleton from "../Skeleton";
import styles from "./PageSkeleton.module.css";

interface PageSkeletonProps {
  variant?: "home" | "contact" | "generic";
}

export default function PageSkeleton({ variant = "generic" }: PageSkeletonProps) {
  if (variant === "home") {
    return (
      <div className={styles.page}>
        <HeroSkeleton />
        <div className={styles.divider} />
        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <Skeleton variant="text" width="220px" height="36px" />
          </div>
          <div className={styles.bentoGrid}>
            <div className={styles.bentoLarge}>
              <Skeleton variant="rounded" width="100%" height="100%" />
            </div>
            <div className={styles.bentoSmall1}>
              <Skeleton variant="rounded" width="100%" height="100%" />
            </div>
            <div className={styles.bentoSmall2}>
              <Skeleton variant="rounded" width="100%" height="100%" />
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <div className={styles.page}>
        <div className={styles.contactLayout}>
          <div className={styles.contactSidebar}>
            <div className={styles.sidebarContent}>
              <div className={styles.sidebarHeading}>
                <Skeleton variant="text" width="100%" height="52px" />
                <Skeleton variant="text" width="80%" height="52px" />
              </div>
              <div className={styles.sidebarBody}>
                <Skeleton variant="text" width="100%" height="18px" />
                <Skeleton variant="text" width="100%" height="18px" />
                <Skeleton variant="text" width="65%" height="18px" />
              </div>
              <Skeleton variant="rounded" width="180px" height="44px" />
            </div>
          </div>
          <div className={styles.contactForm}>
            <div className={styles.formRow}>
              <Skeleton variant="rounded" width="100%" height="52px" />
              <Skeleton variant="rounded" width="100%" height="52px" />
            </div>
            <Skeleton variant="rounded" width="100%" height="52px" />
            <div className={styles.formRow}>
              <Skeleton variant="rounded" width="100%" height="52px" />
              <Skeleton variant="rounded" width="100%" height="52px" />
            </div>
            <Skeleton variant="rounded" width="100%" height="130px" />
            <Skeleton variant="rounded" width="100%" height="52px" />
            <div className={styles.formSubmit}>
              <Skeleton variant="rounded" width="160px" height="44px" />
            </div>
          </div>
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
