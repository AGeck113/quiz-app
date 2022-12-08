import { questions } from "./CardsDatabase.js";

const bookmarkedQuestions = questions.filter((question) => {
  return question.bookmarked === true;
}).length;

const counterBookmarked = document.querySelector(
  '[data-js="counter-bookmarked"]'
);
counterBookmarked.innerHTML = bookmarkedQuestions;

export function Count() {
  const linkProfile = document.querySelector('[data-js="link-profile"]');
  linkProfile.addEventListener("click", () => {
    const bookmarkedQuestions = questions.filter((question) => {
      return question.bookmarked === true;
    }).length;
    const counterBookmarked = document.querySelector(
      '[data-js="counter-bookmarked"]'
    );
    counterBookmarked.innerHTML = bookmarkedQuestions;
  });
}
