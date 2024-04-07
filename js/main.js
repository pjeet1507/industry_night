import { portfolios } from "./modules/portfolios.js";
import { accordian } from "./modules/according.js";
import { hambur } from "./modules/hambur.js";
import { updateProgressBar } from "./modules/progessbar.js";
import { navgsap } from "./modules/hambur.js";
import { leftandright } from "./modules/gsap.js";

portfolios();
accordian();
hambur();
navgsap();
leftandright();
window.onscroll = function () {
  updateProgressBar();
};
