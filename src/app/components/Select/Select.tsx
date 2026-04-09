import { forwardRef, SelectHTMLAttributes } from "react";
import styles from "./Select.module.css";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  optional?: boolean;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, optional, error, options, placeholder = "Select an option", className, required, ...props }, ref) => {
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
        <div className={styles.selectWrapper}>
          <select
            ref={ref}
            className={`${styles.select} ${error ? styles.error : ""} ${className || ""}`}
            required={required}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className={styles.arrow}>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="var(--border)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;