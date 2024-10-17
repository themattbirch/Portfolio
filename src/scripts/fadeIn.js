// scripts/fadeIn.js
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px",
};

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

export function handleFadeIn() {
  const fadeIns = document.querySelectorAll(".fade-in-up:not(.visible)");
  fadeIns.forEach((fadeIn) => {
    if (fadeIn.getBoundingClientRect().top < window.innerHeight) {
      fadeIn.classList.add("visible");
    } else {
      observer.observe(fadeIn);
    }
  });
}

function initFadeIn() {
  if ("IntersectionObserver" in window) {
    handleFadeIn();
  } else {
    document
      .querySelectorAll(".fade-in-up")
      .forEach((el) => el.classList.add("visible"));
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFadeIn);
} else {
  initFadeIn();
}

document.addEventListener("astro:page-load", handleFadeIn);
