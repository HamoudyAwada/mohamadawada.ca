import styles from "./StatBlock.module.css";

interface StatBlockProps {
  value: string;
  description: string;
}

export default function StatBlock({ value, description }: StatBlockProps) {
  return (
    <div className={styles.container}>
      <div className={styles.value}>{value}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
