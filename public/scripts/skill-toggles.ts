// src/scripts/skill-toggles.ts

// This "gatekeeper" flag ensures the logic only runs once.
let isInitialized = false;

export default function initializeSkillToggles(): void {
  // If we've already run this, do nothing.
  if (isInitialized) return;

  const skillsGrid = document.querySelector<HTMLDivElement>(".skills-grid");
  if (!skillsGrid) return;

  let currentlyOpenCard: HTMLElement | null = null;

  skillsGrid.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const card = target.closest<HTMLElement>(".skill-card");
    if (!card) return;

    const isExpanded = card.classList.contains("is-active");

    // close any other open card
    if (currentlyOpenCard && currentlyOpenCard !== card) {
      currentlyOpenCard.classList.remove("is-active");
      currentlyOpenCard
        .querySelector<HTMLButtonElement>(".skill-header")
        ?.setAttribute("aria-expanded", "false");
    }

    // toggle this one
    card.classList.toggle("is-active", !isExpanded);
    card
      .querySelector<HTMLButtonElement>(".skill-header")
      ?.setAttribute("aria-expanded", String(!isExpanded));

    currentlyOpenCard = !isExpanded ? card : null;
  });
  isInitialized = true;
}
