export function accordian() {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach(function (accordion) {
    const toggleBtn = accordion.querySelector(".toggle-description");
    const description = accordion.querySelector(".description");

    toggleBtn.addEventListener("click", function (e) {
      e.preventDefault();
      description.classList.toggle("show");

      if (description.classList.contains("show")) {
        toggleBtn.textContent = "Read Less";
      } else {
        toggleBtn.textContent = "Read More";
      }
    });
  });
}
