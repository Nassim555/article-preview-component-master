const btn = document.querySelector(".share-btn");
const social = document.querySelector(".social");

btn.addEventListener("click", () => {
  if (social.classList.contains("show")) {
    btn.classList.remove("active");
    social.classList.remove("show");
    social.classList.add("closing");
    social.addEventListener(
      "animationend",
      () => {
        social.classList.remove("closing");
      },
      { once: true },
    );
  } else {
    btn.classList.add("active");
    social.classList.add("show");
  }
});
