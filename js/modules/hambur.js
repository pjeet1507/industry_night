export function hambur() {
  let menu = document.querySelector("#hammenu"),
    mobileNav = document.querySelector(".mobile-menu");

  function toggleMenu() {
    mobileNav.classList.toggle("hidden");
  }

  menu.addEventListener("click", toggleMenu);
}

export function navgsap() {
  gsap.from(".menu li", {
    opacity: 0,
    x: 20, // Change 'y' to 'x' to animate horizontally
    stagger: 0.2,
    duration: 0.2,
    ease: "power3.out",
  });
}
