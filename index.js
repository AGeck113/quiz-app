import { questions } from "./components/CardsDatabase.js";
import { createCard } from "./components/CreateCards.js";

questions.forEach((question) => {
  createCard(question);
});

// Onepager
const allPages = document.querySelectorAll('[data-js*="page"]');
const allLinks = document.querySelectorAll('[data-js*="link"]');

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    allPages.forEach((page) => {
      page.classList.remove("current");
    });
    allLinks.forEach((link) => {
      link.classList.remove("active-tab");
      event.target.classList.add("active-tab");
    });
    const hrefAttribute = event.target.getAttribute("href");
    const currentPage = document.querySelector(hrefAttribute);
    currentPage.classList.add("current");
  });
});

//newQuestions
console.clear();

const form = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="submitButton"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newArea = document.querySelector('[data-js="newCardArea"]');
  const newCard = document.createElement("article");
  newCard.classList.add("question-card");
  newArea.append(newCard);

  const newBookmarkButton = document.createElement("button");
  newBookmarkButton.classList.add("question-card__bookmark-button");
  newBookmarkButton.textContent = "Click"; // Button needs svg
  newCard.append(newBookmarkButton);

  const newQuestion = document.createElement("p");
  newQuestion.textContent = "Question: " + data.newQuestion;
  newQuestion.classList.add("question-card__question");
  newCard.append(newQuestion);

  const newAnswer = document.createElement("p");
  newAnswer.textContent = "Answer: " + data.newAnswer;
  newAnswer.classList.add("answer");
  newCard.append(newAnswer);

  const newTagList = document.createElement("ul");
  newTagList.classList.add("question-card__categorie-tags");
  newCard.append(newTagList);

  const newTag = document.createElement("li");
  newTag.textContent = "#" + data.newTag;
  newTagList.append(newTag);

  event.target.reset();

  counterQuestion.textContent = `You have 150 Characters left`;
  counterAnswer.textContent = `You have 150 Characters left`;
});
//Counter for Characters left
const counterQuestion = document.querySelector('[data-js="counterQuestion"]');
const counterAnswer = document.querySelector('[data-js="counterAnswer"]');

const inputQuestion = document.querySelector('[data-js="inputQuestion"]');
const inputAnswer = document.querySelector('[data-js="inputAnswer"]');

inputQuestion.addEventListener("input", () => {
  const enteredCharacters = inputQuestion.value.length;
  counterQuestion.textContent = `You have ${
    150 - enteredCharacters
  } Characters left`;
});

inputAnswer.addEventListener("input", () => {
  const enteredCharacters = inputAnswer.value.length;
  counterAnswer.textContent = `You have ${
    150 - enteredCharacters
  } Characters left`;
});

const bodyElement = document.querySelector('[data-js="body"]');

const toggleButton = document.querySelector('[data-js="toggleDarkMode"');
toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
