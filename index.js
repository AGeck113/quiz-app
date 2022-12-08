console.clear();
import { questions } from "./components/CardsDatabase.js";
import { createCard } from "./components/CreateCards.js";
import { createBookmarkedCard } from "./components/CreateBookmarkedCards.js";
import { onepager } from "./components/Onepager.js";
import { Form } from "./components/Form.js";
import { darkmode } from "./components/Darkmode.js";
import { Count } from "./components/CounterBookmarked.js";

questions.forEach((question) => {
  createCard(question);
});

// Onepager
onepager();
//Bookmark functionality
const bookmarkLink = document.querySelector('[data-js="link-bookmark"]');
const bookmarkedPage = document.querySelector('[data-js="page-bookmark"]');

bookmarkLink.addEventListener("click", () => {
  bookmarkedPage.innerHTML = "";
  questions.forEach((question) => {
    if (question.bookmarked === true) {
      createBookmarkedCard(question);
    }
  });
});
//newQuestions
console.clear();
//Form + Submit
Form();
darkmode();
Count();
