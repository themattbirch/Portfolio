// src/data/projects.ts
import type { ImageMetadata } from "astro";
import scoreGeniusImg from "/assets/images/scoregenius-app.webp";
import floridaGradeAndPaveImg from "/assets/images/florida-grade-and-pave.webp";
import activeCareClinicImg from "/assets/images/active-care-clinic.webp";
import thePackersPostImg from "/assets/images/the-packers-post.webp";
import prestigeAcademiaImg from "/assets/images/prestige-academia.webp";
import williamKerriganPaintingImg from "/assets/images/william-kerrigan-painting.webp";
import lynchsLandingImg from "/assets/images/lynchs-landing-rv-park.webp";

export interface Project {
  title: string;
  image: ImageMetadata; // now a straight import
  tagline: string;
  type: "Full-Stack App" | "Mobile App" | "Brand Website";
  technologies?: readonly string[];
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
    githubUrl: "https://github.com/themattbirch/score-genius",
  },
  {
    title: "Florida Grade & Pave",
    image: floridaGradeAndPaveImg,
    tagline: "A professional online presence…",
    type: "Brand Website",
    liveUrl: "https://floridagradeandpave.com/",
  },
  {
    title: "Active Care Clinic",
    image: activeCareClinicImg,
    tagline: "A welcoming site for a chiropractic…",
    type: "Brand Website",
    liveUrl: "https://activecareclinic.com/",
  },
  {
    title: "The Packers Post",
    image: thePackersPostImg,
    tagline: "A Green Bay Packers-focused sports blog…",
    type: "Brand Website",
    liveUrl: "https://thepackerspost.com/",
  },
  {
    title: "Prestige Academia",
    image: prestigeAcademiaImg,
    tagline:
      "An online academy that teaches English to students in Latin America.",
    type: "Brand Website",
    liveUrl: "https://prestigeacademia.com/",
  },
  {
    title: "William Kerrigan Painting",
    image: williamKerriganPaintingImg,
    tagline:
      "A clean, professional portfolio for a locally-owned painting company.",
    type: "Brand Website",
    liveUrl: "https://williamkpainting.com/",
  },
  {
    title: "Lynch's Landing",
    image: lynchsLandingImg,
    tagline:
      "A popular hospitality business featuring live webcams and contact forms.",
    type: "Brand Website",
    liveUrl: "https://lynchslandingrvpark.com/",
  },
];
