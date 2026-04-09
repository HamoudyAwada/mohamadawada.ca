import { forwardRef, TextareaHTMLAttributes, useState, ChangeEvent, useEffect } from "react";
import styles from "./TextArea.module.css";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  optional?: boolean;
  error?: string;
  showCharacterCount?: boolean;
  maxCharacters?: number;
  required?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, optional, error, showCharacterCount = true, maxCharacters = 1000, className, onChange, value, required, ...props }, ref) => {
    const [charCount, setCharCount] = useState(0);

    // Update character count when value changes from parent
    useEffect(() => {
      if (typeof value === 'string') {
        setCharCount(value.length);
      } else {
        setCharCount(0);
      }
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      if (onChange) {
        onChange(e);
      }
    };

    const remainingChars = maxCharacters - charCount;

    return (
      <div className={styles.wrapper}>
        {label && (
          <div className={styles.labelHeader}>
            <div className={styles.labelWrapper}>
              <label className={styles.label}>
                {label}
                {required && <span className={styles.required}>*</span>}
                {optional && <span className={styles.optional}>(Optional)</span>}
              </label>
            </div>
            {showCharacterCount && (
              <div className={styles.characterCount}>
                {remainingChars} Characters remaining
              </div>
            )}
          </div>
        )}
        <textarea
          ref={ref}
          className={`${styles.textarea} ${error ? styles.error : ""} ${className || ""}`}
          onChange={handleChange}
          value={value}
          maxLength={maxCharacters}
          required={required}
          {...props}
        />
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;