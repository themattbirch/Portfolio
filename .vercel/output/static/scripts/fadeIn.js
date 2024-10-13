// scripts/fadeIn.js
export function handleFadeIn() {
  const fadeIns = document.querySelectorAll(".fade-in-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  fadeIns.forEach((fadeIn) => {
    const rect = fadeIn.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      fadeIn.classList.add("visible");
    } else {
      observer.observe(fadeIn);
    }
  });
}

if ("IntersectionObserver" in window) {
  document.addEventListener("DOMContentLoaded", handleFadeIn);
  document.addEventListener("astro:page-load", handleFadeIn);
} else {
  document
    .querySelectorAll(".fade-in")
    .forEach((el) => el.classList.add("visible"));
}
