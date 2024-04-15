gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(SplitText);

gsap.registerPlugin(TextPlugin);

export function leftandright() {
  function slideInFromLeft(element, staggerValue) {
    gsap.from(element, {
      duration: 1,
      x: -100,
      opacity: 0,
      stagger: staggerValue,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "+=500",
        scrub: true,
      },
      clearProps: "scale,left,opacity,transform",
    });
  }

  function slideInFromRight(element, staggerValue) {
    gsap.from(element, {
      duration: 1,
      x: 100,
      opacity: 0,
      stagger: staggerValue,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "+=500",
        scrub: true,
      },
      clearProps: "scale,left,opacity,transform",
    });
  }

  function slideInFromBottom(element, staggerValue) {
    gsap.from(element, {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: staggerValue,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "+=500",
        scrub: true,
      },
      clearProps: "scale,left,opacity,transform",
    });
  }

  function slideInChildren(parentElement, direction) {
    var childElements = parentElement.children;
    var staggerValue = 0.2;
    if (parentElement.classList.contains("leftin")) {
      staggerValue = 0.2;
    } else if (parentElement.classList.contains("rightin")) {
      staggerValue = 0.2;
    } else if (parentElement.classList.contains("bottomin")) {
      staggerValue = 0.2;
    }

    Array.from(childElements).forEach(function (childElement, index) {
      gsap.from(childElement, {
        duration: 1,
        opacity: 0,
        x: direction === "right" ? 100 : direction === "left" ? -100 : 0,
        y: direction === "bottom" ? 100 : 0,
        delay: index * staggerValue,
        ease: "power2.out",
        scrollTrigger: {
          trigger: parentElement,
          start: "top 85%",
          end: "+=500",
          scrub: true,
        },
      });
    });
  }

  var parentElements = document.querySelectorAll(
    ".rightin, .leftin, .bottomin"
  );
  parentElements.forEach(function (parentElement) {
    if (parentElement.classList.contains("rightin")) {
      slideInFromRight(parentElement, 0);
      slideInChildren(parentElement, "right");
    } else if (parentElement.classList.contains("leftin")) {
      slideInFromLeft(parentElement, 0);
      slideInChildren(parentElement, "left");
    } else if (parentElement.classList.contains("bottomin")) {
      slideInFromBottom(parentElement, 0);
      slideInChildren(parentElement, "bottom");
    }
  });
}

export function animateHeaderTexts() {
  const timeline = gsap.timeline({
    defaults: (".element", { duration: 0.5, ease: "power2.inOut" }),
  });

  // Correctly select elements using nth-of-type to ignore non-h3 and non-h1 elements
  const header1 = document.querySelector("#about h3:nth-of-type(1)");
  const header2 = document.querySelector("#about h1");
  const header3 = document.querySelector("#about h3:nth-of-type(2)");
  const header4 = document.querySelector("#about h3:nth-of-type(3)");

  // Apply animations with text content specific to each element, without staggered delays
  timeline
    .to(header1, { text: "JOIN US FOR" })
    .to(
      header2,
      { text: "<span> FANSHAWE COLLEGE</span> INDUSTRY NIGHT 2024" },
      "<"
    )
    .to(
      header3,
      {
        text: "Interactive Media Design & User Experience Design Programs",
      },
      "<"
    )
    .to(header4, { text: "School of Media & Digital Arts" }, "<");
}
