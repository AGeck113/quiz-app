const bodyElement = document.querySelector('[data-js="body"]');
console.log(bodyElement);

const toggleButton = document.querySelector('[data-js="toggleDarkMode"');
toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
