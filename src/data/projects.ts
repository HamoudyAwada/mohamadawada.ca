import imgEnmax from "../assets/76f0998bf47cdb906db55598c4c600e18a2ac8fb.png";
import imgTrumi from "../assets/ab72dd35391820c5919d41bb47e2f9abe185f5e4.png";
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
  imageFirst: boolean;
  badge: string;
  tags: ProjectTag[];
  featured: boolean;
  status: "published" | "coming-soon";
}

// Map simple image keys (from projects.json) to the actual imported assets.
// When you add a new project, import its image above and add a key here.
const imageMap: Record<string, string> = {
  enmax: imgEnmax,
  trumi: imgTrumi,
};

const projects: Project[] = projectsContent.projects.map((p) => ({
  slug: p.slug,
  title: p.title,
  description: p.description,
  coverImage: imageMap[p.imageKey] ?? imgEnmax,
  coverImageAlt: p.coverImageAlt,
  imageType: p.imageType as "cropped" | "square",
  imageFirst: p.imageFirst,
  badge: p.badge,
  tags: p.tags.map((t) => ({ label: t.label, variant: t.variant as TagVariant })),
  featured: p.featured,
  status: p.status as "published" | "coming-soon",
}));

export default projects;
