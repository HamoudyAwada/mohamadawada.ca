import { useRef, useState, useLayoutEffect } from "react";
import { Link } from "react-router";
import Tag from "../Tag";
import Divider from "../Divider";
import FadeInImage from "../FadeInImage";
import { arrowRight } from "../../data/svgPaths";
import styles from "./ProjectCard.module.css";

// Gap between tags (must match CSS gap on .tags)
const TAG_GAP = 12;
// Width reserved for "+N" badge + gap to the badge
const BADGE_RESERVE = 44;

interface ProjectCardProps {
  image: string;
  imageType?: "cropped" | "square";
  imageBg?: string | null;
  title: string;
  description: string;
  tags: Array<{ label: string; variant: "primary" | "secondary" | "tertiary" | "purple" | "red" }>;
  badge: string;
  href: string;
}

function IconRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 18.0006 15.0008" fill="none">
      <path d={arrowRight} fill="currentColor" />
    </svg>
  );
}

export default function ProjectCard({
  image,
  imageType = "cropped",
  imageBg,
  title,
  description,
  tags,
  badge,
  href,
}: ProjectCardProps) {
  const isSquare = imageType === "square";

  // --- Responsive tag overflow ---
  // Start by showing all tags so we can measure their widths before first paint.
  const [visibleCount, setVisibleCount] = useState(tags.length);
  // rowRef: the stable outer row — its width never changes when visibleCount changes.
  const rowRef = useRef<HTMLDivElement>(null);
  // tagsRef: inner container — used only to measure individual tag widths.
  const tagsRef = useRef<HTMLDivElement>(null);
  // Store individual tag widths so ResizeObserver can recompute without
  // needing all tags to be rendered.
  const tagWidths = useRef<number[]>([]);

  useLayoutEffect(() => {
    const row = rowRef.current;
    const el = tagsRef.current;
    if (!row || !el) return;

    const compute = (rowWidth: number, widths: number[]) => {
      // First check if every tag fits with no badge at all.
      const totalNoBadge = widths.reduce(
        (sum, w, i) => sum + w + (i > 0 ? TAG_GAP : 0),
        0
      );
      if (totalNoBadge <= rowWidth) return widths.length;

      // Overflow: pack as many tags as fit in (rowWidth − badge space).
      const available = rowWidth - BADGE_RESERVE;
      let used = 0;
      let count = 0;
      for (let i = 0; i < widths.length; i++) {
        const gap = i > 0 ? TAG_GAP : 0;
        if (used + gap + widths[i] <= available) {
          used += gap + widths[i];
          count = i + 1;
        } else {
          break;
        }
      }
      return Math.max(1, count);
    };

    const measure = () => {
      // Use the stable outer row width — unaffected by how many tags are visible.
      const rowWidth = row.offsetWidth;

      // When all tags are rendered, capture their natural widths.
      const items = Array.from(el.children) as HTMLElement[];
      if (items.length === tags.length) {
        tagWidths.current = items.map((item) => item.offsetWidth);
      }

      // Use stored widths if available, otherwise fall back to rendered widths.
      const widths =
        tagWidths.current.length === tags.length
          ? tagWidths.current
          : items.map((item) => item.offsetWidth);

      if (widths.length > 0) {
        setVisibleCount(compute(rowWidth, widths));
      }
    };

    measure();
    // Observe the stable outer row so resize only fires on real layout changes
    // (e.g. window resize), not when visibleCount shrinks the inner container.
    const ro = new ResizeObserver(measure);
    ro.observe(row);
    return () => ro.disconnect();
  }, [tags.length]); // re-run if the tag list changes

  const overflowCount = tags.length - visibleCount;

  return (
    <Link to={href} className={styles.card}>
      {/* Image section */}
      <div
        className={isSquare ? styles.imageContainerSquare : styles.imageContainer}
        style={isSquare && imageBg ? { backgroundColor: imageBg } : undefined}
      >
        <FadeInImage
          src={image}
          alt={title}
          className={isSquare ? styles.imageSquare : styles.image}
        />
      </div>

      {/* Content section — light bg, rounded bottom corners */}
      <div className={styles.content}>
        {/* Title + Description block */}
        <div className={styles.topSection}>
          <div className={styles.dividerWrapper}>
            <Divider />
          </div>
          <div className={styles.titleSection}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
          </div>
        </div>

        {/* Tags + Footer block */}
        <div className={styles.bottomSection}>
          <div className={styles.dividerWrapper}>
            <Divider />
          </div>

          {/* tagsRow: badge lives outside the clipping container so it's always visible */}
          <div ref={rowRef} className={styles.tagsRow}>
            <div ref={tagsRef} className={styles.tags}>
              {tags.slice(0, visibleCount).map((tag, index) => (
                <Tag key={index} variant={tag.variant}>
                  {tag.label}
                </Tag>
              ))}
            </div>
            {overflowCount > 0 && (
              <span className={styles.overflowBadge}>+{overflowCount}</span>
            )}
          </div>

          <div className={styles.footer}>
            <span className={styles.badge}>{badge}</span>
            <div className={styles.link}>
              <span className={styles.seeMore}>See more</span>
              <IconRight />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
