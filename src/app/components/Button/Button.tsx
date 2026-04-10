import { ReactNode } from "react";
import { Link } from "react-router";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  icon,
  iconPosition = "right",
  href,
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const className = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{children}</span>
      {icon && iconPosition === "right" && <span className={styles.icon}>{icon}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}