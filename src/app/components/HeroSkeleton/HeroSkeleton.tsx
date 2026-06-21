import Skeleton from "../Skeleton";
import styles from "./HeroSkeleton.module.css";

export default function HeroSkeleton() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.titleLines}>
          <Skeleton variant="text" width="100%" height="72px" />
        </div>
        <div className={styles.descriptionLines}>
          <Skeleton variant="text" width="100%" height="20px" />
          <Skeleton variant="text" width="95%" height="20px" />
          <Skeleton variant="text" width="75%" height="20px" />
        </div>
        <Skeleton variant="rounded" width="180px" height="44px" />
      </div>
    </section>
  );
}
