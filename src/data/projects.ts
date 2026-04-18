import imgEnmax from "../assets/76f0998bf47cdb906db55598c4c600e18a2ac8fb.webp";
import imgTrumi from "../assets/trumi-hero.webp";
import imgYYventC from "../assets/yyventc-discover.webp";
import projectsContent from "../content/projects.json";

type TagVariant = "primary" | "secondary" | "tertiary" | "purple" | "red";

export interface ProjectTag {
  label: string;
  variant: TagVariant;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  coverImageAlt: string;
  imageType: "cropped" | "square";
  coverImageBg: string | null;
  imageFirst: boolean;
  badge: string;
  tags: ProjectTag[];
  featured: boolean;
  status: "published" | "coming-soon";
  ctaLabel: string;
}

// Map simple image keys (from projects.json) to the actual imported assets.
// When you add a new project, import its image above and add a key here.
const imageMap: Record<string, string> = {
  enmax: imgEnmax,
  trumi: imgTrumi,
  yyventc: imgYYventC,
};

const projects: Project[] = projectsContent.projects.map((p) => ({
  slug: p.slug,
  title: p.title,
  description: p.description,
  coverImage: imageMap[p.imageKey] ?? imgEnmax,
  coverImageAlt: p.coverImageAlt,
  imageType: p.imageType as "cropped" | "square",
  coverImageBg: p.coverImageBg ?? null,
  imageFirst: p.imageFirst,
  badge: p.badge,
  tags: p.tags.map((t) => ({ label: t.label, variant: t.variant as TagVariant })),
  featured: p.featured,
  status: p.status as "published" | "coming-soon",
  ctaLabel: p.ctaLabel ?? `Explore ${p.title}`,
}));

export default projects;
