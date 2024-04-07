export function DomainLinkFix() {
  const projectDivs = document.querySelectorAll(".portfolio-item");
  projectDivs.forEach((div) => {
    div.addEventListener("click", function () {
      projectDivs.forEach((div) => div.classList.remove("clicked"));
      this.classList.add("clicked");
      const link = this.querySelector("a");
      if (link) {
        window.location.href = link.href;
      }
    });
  });
}
