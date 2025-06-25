// src/data/projects.ts
import { getImage } from "astro:assets";
import type { GetImageResult, ImageMetadata } from "astro";
import scoreGeniusImg from "/assets/images/scoregenius-app.webp";
import floridaGradeAndPaveImg from "/assets/images/florida-grade-and-pave.webp";
import activeCareClinicImg from "/assets/images/active-care-clinic.webp";
import thePackersPostImg from "/assets/images/the-packers-post.webp";

// Define the new, more descriptive project type
export interface Project {
  title: string;
  image: GetImageResult;
  tagline: string;
  type: "Full-Stack App" | "Mobile App" | "Client Website";
  technologies: readonly string[]; // ← now matches the readonly arrays
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

// Raw project data before image processing
const projectsData = [
  {
    title: "ScoreGenius",
    img: scoreGeniusImg,
    tagline:
      "An AI-powered PWA/TWA delivering basketball and baseball analytics, packaged for the Google Play Store.",
    type: "Full-Stack App",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Docker",
      "PWA",
      "TWA",
      "TypeScript",
    ],
    liveUrl: "https://scoregenius.io",
    githubUrl: "https://github.com/themattbirch/your-repo-name",
  },
  {
    title: "Florida Grade & Pave",
    img: floridaGradeAndPaveImg,
    tagline: "A professional online presence for a commercial paving company.",
    type: "Client Website",
    technologies: ["Astro", "Tailwind CSS", "SEO"],
    liveUrl: "https://floridagradeandpave.com/",
  },
  {
    title: "Active Care Clinic",
    img: activeCareClinicImg,
    tagline: "A welcoming site for a chiropractic and acupuncture clinic.",
    type: "Client Website",
    technologies: ["Astro", "JavaScript", "Google Maps API"],
    liveUrl: "https://activecareclinic.com/",
  },
  {
    title: "The Packers Post",
    img: thePackersPostImg,
    tagline: "A Green Bay Packers-focused sports blog with an RSS Feed.",
    type: "Client Website",
    technologies: ["Astro", "RSS", "Markdown"],
    liveUrl: "https://thepackerspost.com/",
  },
] as const;

// Process images and export the final typed array
export const projects: Project[] = await Promise.all(
  projectsData.map(async ({ img, ...rest }) => {
    const imageSrc = img || "/assets/images/default-placeholder.webp";
    const image = await getImage({ src: imageSrc, width: 600 });
    return { ...rest, image };
  })
);
