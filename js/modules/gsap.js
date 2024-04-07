gsap.registerPlugin(ScrollTrigger);

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
        end: "bottom center",
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
        end: "bottom center",
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
        end: "bottom center",
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
          end: "bottom center",
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
