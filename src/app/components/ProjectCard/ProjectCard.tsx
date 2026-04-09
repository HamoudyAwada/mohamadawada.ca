import { Link } from "react-router";
import Tag from "../Tag";
import Divider from "../Divider";
import svgPaths from "../../../imports/ProjectGrid/svg-ro8ag74anu";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: Array<{ label: string; variant: "primary" | "secondary" | "tertiary" | "purple" | "red" }>;
  badge: string;
  href: string;
}

function IconRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 18.0006 15.0008" fill="none">
      <path d={svgPaths.p269480} fill="currentColor" />
    </svg>
  );
}

export default function ProjectCard({
  image,
  title,
  description,
  tags,
  badge,
  href,
}: ProjectCardProps) {
  return (
    <Link to={href} className={styles.card}>
      {/* Image section — white bg, rounded top corners */}
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
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
            {tags.map((tag, index) => (
              <Tag key={index} variant={tag.variant}>
                {tag.label}
              </Tag>
            ))}
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
