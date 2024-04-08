gsap.registerPlugin(SplitText);

export function split() {
  var targets = document.querySelectorAll(".text");

  targets.forEach((target) => {
    var split = new SplitText(target, { type: "chars" });

    function getRandomChars(length) {
      var randomChars = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < length; i++) {
        randomChars += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      return randomChars;
    }

    split.chars.forEach(function (char) {
      var randomChars = getRandomChars(1);
      gsap.fromTo(
        char,
        { autoAlpha: 0, text: randomChars },
        {
          duration: 2,
          text: char.textContent,
          ease: "steps(10)",
          autoAlpha: 1,
          delay: Math.random(),
        }
      );
    });
  });
}
