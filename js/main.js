import { portfolios } from "./modules/portfolios.js";
import { accordian } from "./modules/according.js";
import { hambur } from "./modules/hambur.js";
import { updateProgressBar } from "./modules/progessbar.js";
import { navgsap } from "./modules/hambur.js";
import { leftandright } from "./modules/gsap.js";
import { DomainLinkFix } from "./modules/DomainLinkFix.js";
import { pagegsap } from "./modules/pagegsap.js";

pagegsap();
portfolios();
accordian();
hambur();
navgsap();
// leftandright();
DomainLinkFix();

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
