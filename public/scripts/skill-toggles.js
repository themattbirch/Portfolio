// public/scripts/skill-toggles.js

// run only once
let isInitialized = false;

function initializeSkillToggles() {
  if (isInitialized) return;

  const skillsGrid = document.querySelector(".skills-grid");
  if (!skillsGrid) return;

  let currentlyOpenCard = null;

  skillsGrid.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const card = target.closest(".skill-card");
    if (!card) return;

    const isExpanded = card.classList.contains("is-active");

    if (currentlyOpenCard && currentlyOpenCard !== card) {
      currentlyOpenCard.classList.remove("is-active");
      currentlyOpenCard
        .querySelector(".skill-header")
        ?.setAttribute("aria-expanded", "false");
    }

    card.classList.toggle("is-active", !isExpanded);
    card
      .querySelector(".skill-header")
      ?.setAttribute("aria-expanded", String(!isExpanded));

    currentlyOpenCard = !isExpanded ? card : null;
  });

  isInitialized = true;
}

// run on initial load
initializeSkillToggles();

// re-run after any Astro client-side navigation
document.addEventListener("astro:page-load", initializeSkillToggles);
