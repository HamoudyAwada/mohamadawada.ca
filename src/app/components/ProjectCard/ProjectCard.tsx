import { Link } from "react-router";
import Tag from "../Tag";
import Divider from "../Divider";
import FadeInImage from "../FadeInImage";
import { arrowRight } from "../../data/svgPaths";
import styles from "./ProjectCard.module.css";

const MAX_VISIBLE_TAGS = 3;

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
          <div className={styles.tags}>
            {tags.slice(0, MAX_VISIBLE_TAGS).map((tag, index) => (
              <Tag key={index} variant={tag.variant}>
                {tag.label}
              </Tag>
            ))}
            {tags.length > MAX_VISIBLE_TAGS && (
              <span className={styles.overflowBadge}>
                +{tags.length - MAX_VISIBLE_TAGS}
              </span>
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
