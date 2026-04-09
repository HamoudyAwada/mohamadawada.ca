import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        <label className={styles.container}>
          <input
            ref={ref}
            type="checkbox"
            className={`${styles.checkbox} ${error ? styles.error : ""} ${className || ""}`}
            {...props}
          />
          <span className={styles.checkmark}></span>
          <span className={styles.label}>{label}</span>
        </label>
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
