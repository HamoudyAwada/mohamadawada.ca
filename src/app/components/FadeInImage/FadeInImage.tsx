import { useInView } from "../../hooks/useInView";
import styles from "./FadeInImage.module.css";

interface FadeInImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function FadeInImage({ src, alt, className }: FadeInImageProps) {
  const { ref, inView } = useInView();

  return (
    <img
      ref={ref as React.RefObject<HTMLImageElement>}
      src={src}
      alt={alt}
      className={`${styles.image} ${inView ? styles.visible : ""} ${className ?? ""}`}
    />
  );
}
