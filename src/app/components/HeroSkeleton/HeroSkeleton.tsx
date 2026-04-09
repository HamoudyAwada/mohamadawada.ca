import Skeleton from "../Skeleton";
import styles from "./HeroSkeleton.module.css";

export default function HeroSkeleton() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Skeleton variant="rounded" width="100%" height="100%" />
        </div>

        <div className={styles.content}>
          <div className={styles.text}>
            <Skeleton variant="text" width="100%" height="80px" />
            <Skeleton variant="text" width="90%" height="80px" />
            <div className={styles.descriptionLines}>
              <Skeleton variant="text" width="100%" height="20px" />
              <Skeleton variant="text" width="100%" height="20px" />
              <Skeleton variant="text" width="80%" height="20px" />
            </div>
          </div>
          <Skeleton variant="rounded" width="200px" height="56px" />
        </div>
      </div>
    </section>
  );
}
