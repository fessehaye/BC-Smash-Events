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
      button.classList.toggle("bg-green-800");
    } else {
      button.classList.toggle("bg-pink-800");
    }

    gsap.set(cards, { opacity: 1, y: 0 });

    const state = Flip.getState(cards);

    cards.forEach((card) => {
      if (!card.dataset.games.includes(filter)) {
        card.classList.toggle("hidden");
        card.classList.toggle("opacity-0");
      }
    });

    Flip.from(state, {
      duration: 0.5,
      stagger: 0.1,
      scale: true,
      ease: "power3.inOut",
      onEnter: (elements) =>
        gsap.fromTo(
          elements,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 1 }
        ),
    });
  });
});
