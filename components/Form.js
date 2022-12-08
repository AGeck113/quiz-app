import { questions } from "./CardsDatabase.js";
import { createCard } from "./CreateCards.js";

export function Form() {
  const form = document.querySelector('[data-js="form"]');

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
    newBookmarkButton.innerHTML = `<svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
    />
  </svg>`;
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
    //Append newCard to Homepage

    const newEntry = {
      question: data.newQuestion,
      answer: data.newAnswer,
      tags: data.newTag.split(","),
      bookmarked: false,
    };
    questions.push(newEntry);
    createCard(newEntry);

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
}
