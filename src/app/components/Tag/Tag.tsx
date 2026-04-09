import styles from "./Tag.module.css";

interface TagProps {
  children: string;
  variant?: "primary" | "secondary" | "tertiary" | "purple" | "red";
}

export default function Tag({ children, variant = "primary" }: TagProps) {
  return (
    <div className={`${styles.tag} ${styles[variant]}`}>
      {children}
    </div>
  );
}