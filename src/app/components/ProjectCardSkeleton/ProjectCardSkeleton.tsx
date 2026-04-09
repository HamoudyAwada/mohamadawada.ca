import Skeleton from "../Skeleton";
import styles from "./ProjectCardSkeleton.module.css";

export default function ProjectCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Skeleton variant="rounded" width="100%" height="100%" />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <Skeleton variant="text" width="70%" height="32px" />
          <div className={styles.tags}>
            <Skeleton variant="rounded" width="80px" height="32px" />
            <Skeleton variant="rounded" width="100px" height="32px" />
          </div>
        </div>

        <div className={styles.description}>
          <Skeleton variant="text" width="100%" height="20px" />
          <Skeleton variant="text" width="100%" height="20px" />
          <Skeleton variant="text" width="60%" height="20px" />
        </div>
      </div>
    </div>
  );
}
