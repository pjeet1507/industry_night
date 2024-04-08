gsap.registerPlugin(ScrollTrigger);
export function pagegsap() {
  gsap.utils.toArray(".section").forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
  });
}
