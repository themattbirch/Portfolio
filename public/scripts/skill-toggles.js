// public/scripts/skill-toggles.js

// Accordion toggle helper (plain ES module, no TypeScript)
let isInitialized = false;

export default function initializeSkillToggles() {
  if (isInitialized) return; // run only once per page load

  const skillsGrid = document.querySelector(".skills-grid");
  if (!skillsGrid) return;

  let currentlyOpenCard = null;

  skillsGrid.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const card = target.closest(".skill-card");
    if (!card) return;

    const isExpanded = card.classList.contains("is-active");

    // close any previously-open card
    if (currentlyOpenCard && currentlyOpenCard !== card) {
      currentlyOpenCard.classList.remove("is-active");
      currentlyOpenCard
        .querySelector(".skill-header")
        ?.setAttribute("aria-expanded", "false");
    }

    // toggle the clicked card
    card.classList.toggle("is-active", !isExpanded);
    card
      .querySelector(".skill-header")
      ?.setAttribute("aria-expanded", String(!isExpanded));

    currentlyOpenCard = !isExpanded ? card : null;
  });

  isInitialized = true;
}
