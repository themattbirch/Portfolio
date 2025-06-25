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
    tagline:
      "An AI-driven Progressive Web App (PWA) and Trusted Web Activity (TWA) that delivers daily NBA and MLB score forecasts using a modular machine-learning pipeline. Powered by a Node.js/Express backend on Docker with a Supabase database, it offers advanced analytics in a privacy-first, offline-capable interface.",
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
    tagline:
      "A family-owned paving contractor in Central Florida offering asphalt milling, paving, concrete work, and sealcoating for both residential and commercial clients",
    type: "Brand Website",
    liveUrl: "https://floridagradeandpave.com/",
  },
  {
    title: "Active Care Clinic",
    image: activeCareClinicImg,
    tagline:
      "A chiropractic and acupuncture clinic offering personalized, hands-on pain relief through spinal decompression, physical therapy, and wellness treatments.",
    type: "Brand Website",
    liveUrl: "https://activecareclinic.com/",
  },
  {
    title: "The Packers Post",
    image: thePackersPostImg,
    tagline:
      "A Green Bay Packers–focused sports blog delivering news, game previews, recaps, rankings, and historical analysis for passionate fans around the world.",
    type: "Brand Website",
    liveUrl: "https://thepackerspost.com/",
  },
  {
    title: "Prestige Academia",
    image: prestigeAcademiaImg,
    tagline:
      "An online blended-learning academy offering Cambridge-backed English courses with live instruction, interactive materials, and level assessments for students across Latin America.",
    type: "Brand Website",
    liveUrl: "https://prestigeacademia.com/",
  },
  {
    title: "William Kerrigan Painting",
    image: williamKerriganPaintingImg,
    tagline:
      "A contractor servicing residential and commercial properties across Central Ohio with interior and exterior painting, farm painting, and pressure-washing",
    type: "Brand Website",
    liveUrl: "https://williamkpainting.com/",
  },
  {
    title: "Lynch's Landing",
    image: lynchsLandingImg,
    tagline:
      "A scenic riverfront RV park in North Central Florida offering full-service hookups, a fishing dock, boat ramp, and classic “Old Florida” ambiance for locals and tourists alike.",
    type: "Brand Website",
    liveUrl: "https://lynchslandingrvpark.com/",
  },
];
