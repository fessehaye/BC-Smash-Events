import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

const cards = document.querySelectorAll("a.card");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;

    if (filter === "Melee") {
      button.classList.toggle("bg-green-700");
    } else {
      button.classList.toggle("bg-pink-700");
    }

    gsap.set(cards, { opacity: 1, y: 0 });

    const state = Flip.getState(cards);

    cards.forEach((card) => {
      if (!card.dataset.games.includes(filter)) {
        card.classList.toggle("hidden");
      }
    });

    Flip.from(state, {
      duration: 0.3,
      stagger: 0.1,
      ease: "power1.inOut",
    });
  });
});
