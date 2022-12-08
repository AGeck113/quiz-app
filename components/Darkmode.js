export function darkmode() {
  const bodyElement = document.querySelector('[data-js="body"]');

  const toggleButton = document.querySelector('[data-js="toggleDarkMode"');
  toggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
  });
}
