console.clear();

const buttonCard1 = document.querySelector('[data-js="buttonc1"]');
buttonCard1.addEventListener("click", () => {
  buttonCard1.classList.toggle("active");
});
