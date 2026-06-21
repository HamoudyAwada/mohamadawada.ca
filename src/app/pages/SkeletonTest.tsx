import PageSkeleton from "../components/PageSkeleton";
import styles from "./SkeletonTest.module.css";

const variants = [
  { label: "Home", variant: "home" },
  { label: "Contact", variant: "contact" },
  { label: "Generic", variant: "generic" },
] as const;

export default function SkeletonTest() {
  return (
    <div className={styles.page}>
      {variants.map(({ label, variant }) => (
        <div key={variant} className={styles.section}>
          <div className={styles.label}>{label}</div>
          <div className={styles.preview}>
            <PageSkeleton variant={variant} />
          </div>
        </div>
      ))}
    </div>
  );
}
