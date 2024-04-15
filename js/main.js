import { particle } from "./modules/particle.js";
import { portfolios } from "./modules/portfolios.js";
import { hambur } from "./modules/hambur.js";
import { updateProgressBar } from "./modules/progessbar.js";
import { navgsap } from "./modules/hambur.js";
import { leftandright } from "./modules/gsap.js";
import { pagegsap } from "./modules/pagegsap.js";
import { animateHeaderTexts } from "./modules/gsap.js";
pagegsap();
portfolios();
// hambur();
navgsap();
leftandright();

window.onscroll = function () {
  updateProgressBar();
};

animateHeaderTexts();
particle();
