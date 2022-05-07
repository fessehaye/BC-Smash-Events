import gsap from "gsap";

const cards = document.querySelectorAll("a.card");
const buttons = document.querySelectorAll("button");

const intro = gsap.fromTo(
  cards,
  {
    ease: "power1.inOut",
    opacity: 0,
    y: 100,
  },
  { duration: 0.5, stagger: 0.3, opacity: 1, y: 0 }
);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    intro.progress(1);
  });
});
