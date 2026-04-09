import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  optional?: boolean;
  error?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, optional, error, className, required, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && (
          <div className={styles.labelWrapper}>
            <label className={styles.label}>
              {label}
              {required && <span className={styles.required}>*</span>}
              {optional && <span className={styles.optional}>(Optional)</span>}
            </label>
          </div>
        )}
        <input
          ref={ref}
          className={`${styles.input} ${error ? styles.error : ""} ${className || ""}`}
          required={required}
          {...props}
        />
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;