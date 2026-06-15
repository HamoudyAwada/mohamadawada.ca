import { useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./ProjectTile.module.css";

gsap.registerPlugin(useGSAP);

interface ProjectTileProps {
  image?: string;
  imageAlt?: string;
  imageType?: "cropped" | "square";
  imageBg?: string | null;
  title: string;
  href?: string;
  className?: string;
  placeholder?: boolean;
}

export default function ProjectTile({
  image,
  imageAlt,
  imageType = "cropped",
  imageBg,
  title,
  href,
  className,
  placeholder = false,
}: ProjectTileProps) {
  const isSquare = imageType === "square";
  const tileRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tile = tileRef.current;
      if (!tile || placeholder) return;

      const handlePressStart = () => {
        gsap.to(tile, { scale: 0.97, duration: 0.1, ease: "power2.out" });
      };
      const handlePressEnd = () => {
        gsap.to(tile, { scale: 1, duration: 0.2, ease: "power2.out" });
      };

      tile.addEventListener("pointerdown", handlePressStart);
      tile.addEventListener("pointerup", handlePressEnd);
      tile.addEventListener("pointerleave", handlePressEnd);
      tile.addEventListener("pointercancel", handlePressEnd);

      let cleanupMagnetic = () => {};

      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const maxOffset = 9;
        const xTo = gsap.quickTo(tile, "x", { duration: 0.6, ease: "power3.out" });
        const yTo = gsap.quickTo(tile, "y", { duration: 0.6, ease: "power3.out" });

        const handleMouseMove = (e: MouseEvent) => {
          const rect = tile.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          xTo(px * maxOffset * 2);
          yTo(py * maxOffset * 2);
        };

        const handleMouseLeave = () => {
          xTo(0);
          yTo(0);
        };

        tile.addEventListener("mousemove", handleMouseMove);
        tile.addEventListener("mouseleave", handleMouseLeave);

        cleanupMagnetic = () => {
          tile.removeEventListener("mousemove", handleMouseMove);
          tile.removeEventListener("mouseleave", handleMouseLeave);
        };
      }

      return () => {
        tile.removeEventListener("pointerdown", handlePressStart);
        tile.removeEventListener("pointerup", handlePressEnd);
        tile.removeEventListener("pointerleave", handlePressEnd);
        tile.removeEventListener("pointercancel", handlePressEnd);
        cleanupMagnetic();
      };
    },
    { scope: tileRef, dependencies: [placeholder] }
  );

  const imageAreaStyle =
    !placeholder && isSquare && imageBg ? { backgroundColor: imageBg } : undefined;

  const content = (
    <>
      <div
        className={isSquare ? styles.imageAreaSquare : styles.imageArea}
        style={imageAreaStyle}
      >
        {!placeholder && image && (
          <img
            src={image}
            alt={imageAlt ?? title}
            loading="lazy"
            className={isSquare ? styles.imageSquare : styles.image}
          />
        )}
      </div>
      <div className={styles.textBar}>
        <div className={styles.textBarInner}>
          <span className={styles.title}>{title}</span>
          {!placeholder && href && (
            <span className={styles.viewProject}>View Project →</span>
          )}
        </div>
      </div>
    </>
  );

  const tileClassName = [styles.tile, placeholder ? styles.placeholder : "", className]
    .filter(Boolean)
    .join(" ");

  if (placeholder || !href) {
    return (
      <div ref={tileRef as React.RefObject<HTMLDivElement>} className={tileClassName}>
        {content}
      </div>
    );
  }

  return (
    <Link to={href} ref={tileRef as React.RefObject<HTMLAnchorElement>} className={tileClassName}>
      {content}
    </Link>
  );
}
