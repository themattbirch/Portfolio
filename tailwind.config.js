/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}",
    "./components/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}",
    "./pages/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}",
    "./layouts/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        // Primary + Secondary Colors
        primary: {
          light: "#3b82f6", // Tailwind's blue-500
          DEFAULT: "#172554", // Tailwind's blue-600
          dark: "#1d4ed8",
        },
        secondary: {
          light: "#60a5fa", // Tailwind's blue-400
          DEFAULT: "#3b82f6", // Tailwind's blue-500
          dark: "#1e40af", // Tailwind's blue-800
        },
        // CTA Gradient Colors

        "cta-gradient-from": "#dbeafe", // blue-100
        "cta-gradient-via": "#e0e7ff", // indigo-100
        "cta-gradient-to": "#f3e8ff", // purple-100
        "cta-gradient-dark-from": "#1e3a8a", // blue-900
        "cta-gradient-dark-via": "#312e81", // indigo-900
        "cta-gradient-dark-to": "#4c1d95", // purple-900

        // CTA Button Colors

        "cta-button": "#2563eb", 
        "cta-button-hover": "#1d4ed8", 
        "cta-button-dark": "#3b82f6", 
        "cta-button-dark-hover": "#2563eb",

        // CTA Text Color
        "cta-text": "#ffffff", // white

        // CTA Backdrop and Content Backgrounds
        "cta-backdrop": "rgba(0, 0, 0, 0.5)",
        "cta-backdrop-dark": "rgba(255, 255, 255, 0.3)", 

        "cta-content-bg": "#ffffff",
        "cta-subtext": "#4b5563",
        // Background Colors
        background: {
          light: "#FFFFFF",
          dark: "#1F2937",
          secondary: "#E9EEF4", 
          skills: "#e6ebf2",
          testimonials: "#f0f4f8",
        },
        // Text Colors
        text: {
          light: "#1F2937",
          dark: "#FFFFFF",
          headingLight: "#111827",
          headingDark: "#E5E7EB",
          subtextLight: "#6B7280",
          subtextDark: "#9CA3AF",
          skillsTextLight: "#1f2937",
          skillsTextDark: "#f3f4f6", 
          testimonialTextLight: "#1f2937", 
          testimonialTextDark: "#f3f4f6",
        },
        darkModeText: "#ffffff",
      },
    
      aspectRatio: {
        thumbnail: "1.5",
      },
      fontFamily: {
        sans: ["Source Sans 3", "sans-serif"],
        serif: ["PT Serif", "serif"],
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        subtlePulse: "subtle-pulse 2s infinite",
      },
      screens: {
        "custom-md": "820px", // Custom breakpoint at 820px
        "custom-lg": "1180px", // Custom breakpoint at 1180px
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
