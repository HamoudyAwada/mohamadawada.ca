import styles from "./Divider.module.css";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  variant?: "default" | "accent";
}

export default function Divider({ 
  orientation = "horizontal",
  variant = "default" 
}: DividerProps) {
  const classNames = [
    styles.divider,
    styles[orientation],
    styles[variant]
  ].join(' ');

  return (
    <div className={classNames}>
      {orientation === "horizontal" ? (
        <svg 
          width="100%" 
          height="2" 
          viewBox="0 0 1312 2" 
          fill="none" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0 1H1312" 
            stroke="currentColor" 
            strokeWidth="2"
          />
        </svg>
      ) : (
        <svg 
          width="2" 
          height="100%" 
          viewBox="0 0 2 100" 
          fill="none" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M1 0V100" 
            stroke="currentColor" 
            strokeWidth="2"
          />
        </svg>
      )}
    </div>
  );
}