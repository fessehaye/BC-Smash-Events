import gsap from "gsap";

const cards = document.querySelectorAll("a.card");
const buttons = document.querySelectorAll("button");
const tl = gsap.timeline({});

tl.to(".filter-container,h1", { autoAlpha: 1, duration: 0.3 });

tl.fromTo(
  cards,
  {
    ease: "power1.inOut",
    opacity: 0,
    y: 100,
  },
  {
    duration: 0.5,
    stagger: 0.3,
    opacity: 1,
    y: 0,
    onComplete: () => {
      cards.forEach((card) => {
        card.classList.remove("opacity-0");
      });
    },
  }
);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    tl.progress(1);
  });
});
