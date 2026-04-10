import { useInView } from "../../hooks/useInView";
import styles from "./FadeInImage.module.css";

interface FadeInImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

export default function FadeInImage({ src, alt, className, loading = "lazy" }: FadeInImageProps) {
  const { ref, inView } = useInView();

  return (
    <img
      ref={ref as React.RefObject<HTMLImageElement>}
      src={src}
      alt={alt}
      loading={loading}
      className={`${styles.image} ${inView ? styles.visible : ""} ${className ?? ""}`}
    />
  );
}
