export async function createCard(card) {
  const homepage = document.querySelector('[data-js="page-home"]');
  const newCard = document.createElement("article");
  newCard.classList.add("question-card");
  homepage.append(newCard);

  const newBookmarkButton = document.createElement("button");
  newBookmarkButton.innerHTML = `<svg viewBox="0 0 24 24">
  <path
    fill="currentColor"
    d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
  />
</svg>`;
  newBookmarkButton.classList.add("question-card__bookmark-button");
  newBookmarkButton.addEventListener("click", () => {
    newBookmarkButton.classList.toggle("active");
  });
  newCard.append(newBookmarkButton);

  const question = document.createElement("p");
  question.textContent = card.question;
  question.classList.add("question-card__question");
  newCard.append(question);

  const answerButton = document.createElement("button");
  answerButton.classList.add("question-card__show-answer-button");
  answerButton.textContent = "Show Answer";
  newCard.append(answerButton);

  const answer = document.createElement("p");
  answer.textContent = card.answer;
  answer.classList.add("hidden");
  newCard.append(answer);

  answerButton.addEventListener("click", () => {
    if (answerButton.textContent == "Show Answer") {
      answerButton.textContent = "Hide Answer";
      answer.classList.toggle("hidden");
    } else {
      answerButton.textContent = "Show Answer";
      answer.classList.add("hidden");
    }
  });

  const tagList = document.createElement("ul");
  tagList.classList.add("question-card__categorie-tags");
  newCard.append(tagList);

  card.tags.forEach((tag) => {
    console.log(tag);
    const newTag = document.createElement("li");
    newTag.textContent = tag;
    tagList.append(newTag);
  });
}
