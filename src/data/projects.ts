import imgEnmax from "../assets/76f0998bf47cdb906db55598c4c600e18a2ac8fb.png";
import imgTrumi from "../assets/ab72dd35391820c5919d41bb47e2f9abe185f5e4.png";

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

const projects: Project[] = [
  {
    slug: "enmax-design-system",
    title: "ENMAX Design System",
    description:
      "How I helped shape ENMAX's design system and set the foundation for powerful AI assisted workflows.",
    coverImage: imgEnmax,
    coverImageAlt: "ENMAX Design System",
    imageType: "cropped",
    imageFirst: true,
    badge: "ENMAX - Project",
    tags: [
      { label: "Design System", variant: "primary" },
      { label: "GitHub Copilot", variant: "secondary" },
      { label: "Claude", variant: "purple" },
      { label: "AI", variant: "purple" },
    ],
    featured: true,
    status: "coming-soon",
  },
  {
    slug: "trumi",
    title: "Trumi",
    description:
      "A gamified app to help you actually achieve your goals and understand your values.",
    coverImage: imgTrumi,
    coverImageAlt: "Trumi App",
    imageType: "square",
    imageFirst: false,
    badge: "SAIT - Capstone",
    tags: [
      { label: "Capstone", variant: "primary" },
      { label: "Application Design", variant: "secondary" },
      { label: "Agile", variant: "purple" },
      { label: "AI UX", variant: "purple" },
    ],
    featured: true,
    status: "coming-soon",
  },
  {
    slug: "yyventc",
    title: "YYventC",
    description:
      "A community-driven events platform built to connect people in Calgary with local experiences.",
    coverImage: imgEnmax,
    coverImageAlt: "YYventC",
    imageType: "cropped",
    imageFirst: true,
    badge: "Personal Project",
    tags: [
      { label: "Product Design", variant: "primary" },
      { label: "UX Research", variant: "secondary" },
    ],
    featured: false,
    status: "coming-soon",
  },
];

export default projects;
