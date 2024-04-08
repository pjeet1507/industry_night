import { portfolios } from "./modules/portfolios.js";
import { accordian } from "./modules/according.js";
import { hambur } from "./modules/hambur.js";
import { updateProgressBar } from "./modules/progessbar.js";
import { navgsap } from "./modules/hambur.js";
import { leftandright } from "./modules/gsap.js";
import { pagegsap } from "./modules/pagegsap.js";

pagegsap();
portfolios();
accordian();
hambur();
navgsap();
leftandright();

window.onscroll = function () {
  updateProgressBar();
};

window.addEventListener("scroll", function () {
  // Get all sections
  const sections = document.querySelectorAll("section");

  // Iterate through each section
  sections.forEach((section) => {
    // Calculate the position of the section relative to the viewport
    const rect = section.getBoundingClientRect();

    // If the section touches the top of the viewport
    if (rect.top <= 0 && rect.bottom >= 0) {
      // Add a class to indicate the active section
      section.classList.add("active");
    } else {
      // Remove the class if the section is not in the viewport
      section.classList.remove("active");
    }
  });
});

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      // image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 364.48166657217155, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 315.8841110292153, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
