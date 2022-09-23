const btn = document.querySelector(".share-btn");
const social = document.querySelector(".social");
console.log(btn);
btn.addEventListener("click", () => {
  social.classList.toggle("show");
  btn.classList.toggle("active");
});
