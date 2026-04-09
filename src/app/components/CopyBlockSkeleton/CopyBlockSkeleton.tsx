import Skeleton from "../Skeleton";
import styles from "./CopyBlockSkeleton.module.css";

interface CopyBlockSkeletonProps {
  imagePosition?: "left" | "right";
}

export default function CopyBlockSkeleton({
  imagePosition = "left",
}: CopyBlockSkeletonProps) {
  return (
    <div className={`${styles.container} ${styles[imagePosition]}`}>
      <div className={styles.imageWrapper}>
        <Skeleton variant="rounded" width="100%" height="100%" />
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <Skeleton variant="text" width="80%" height="48px" />
          <div className={styles.description}>
            <Skeleton variant="text" width="100%" height="20px" />
            <Skeleton variant="text" width="100%" height="20px" />
            <Skeleton variant="text" width="100%" height="20px" />
            <Skeleton variant="text" width="70%" height="20px" />
          </div>
        </div>

        <Skeleton variant="rounded" width="180px" height="56px" />
      </div>
    </div>
  );
}
