export function Form() {
  const form = document.querySelector('[data-js="form"]');
  // const submitButton = document.querySelector('[data-js="submitButton"]');

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
}
