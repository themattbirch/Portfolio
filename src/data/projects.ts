// src/data/projects.ts
import { getImage } from "astro:assets";

// TODO: Make sure your image paths are correct
import scoreGeniusImg from "/assets/images/scoregenius-app.webp"; // <<< ADD A SCREENSHOT HERE
import floridaGradeAndPaveImg from "/assets/images/florida-grade-and-pave.webp";
import activeCareClinicImg from "/assets/images/active-care-clinic.webp";
import thePackersPostImg from "/assets/images/the-packers-post.webp";

// Define the new, more descriptive project type
export interface Project {
  title: string;
  image: ImageMetadata;
  tagline: string;
  type: "Full-Stack App" | "Mobile App" | "Client Website";
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  // Optional: Add a link to a future case study page
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
    // TODO: Add your GitHub repo link
    githubUrl: "https://github.com/themattbirch/your-repo-name",
    // Optional: you can create a page like /portfolio/scoregenius later
    // caseStudyUrl: "/portfolio/scoregenius"
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
  // TODO: Add your other projects here in the new format
];

// Process images and export the final typed array
export const projects: Project[] = await Promise.all(
  projectsData.map(async (project) => {
    // Fallback to a default image if one isn't found
    const imageSrc = project.img || "/assets/images/default-placeholder.webp";
    const image = await getImage({ src: imageSrc, width: 600 });
    return { ...project, image };
  })
);
