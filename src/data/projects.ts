// src/data/projects.ts
import scoreGeniusImg from "/assets/images/scoregenius-app.webp";
import floridaGradeAndPaveImg from "/assets/images/florida-grade-and-pave.webp";
import activeCareClinicImg from "/assets/images/active-care-clinic.webp";
import thePackersPostImg from "/assets/images/the-packers-post.webp";
import type { ImageMetadata } from "astro";

export interface Project {
  title: string;
  image: ImageMetadata; // now a straight import
  tagline: string;
  type: "Full-Stack App" | "Mobile App" | "Client Website";
  technologies: readonly string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    title: "ScoreGenius",
    image: scoreGeniusImg,
    tagline: "An AI-powered PWA/TWA…",
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
    image: floridaGradeAndPaveImg,
    tagline: "A professional online presence…",
    type: "Client Website",
    technologies: ["Astro", "Tailwind CSS", "SEO"],
    liveUrl: "https://floridagradeandpave.com/",
  },
  {
    title: "Active Care Clinic",
    image: activeCareClinicImg,
    tagline: "A welcoming site for a chiropractic…",
    type: "Client Website",
    technologies: ["Astro", "JavaScript", "Google Maps API"],
    liveUrl: "https://activecareclinic.com/",
  },
  {
    title: "The Packers Post",
    image: thePackersPostImg,
    tagline: "A Green Bay Packers-focused sports blog…",
    type: "Client Website",
    technologies: ["Astro", "RSS", "Markdown"],
    liveUrl: "https://thepackerspost.com/",
  },
];
