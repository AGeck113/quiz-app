//Bookmark buttons
const button1 = document.querySelector('[data-js="btnCard1"]');
button1.addEventListener("click", () => {
  button1.classList.toggle("active");
});

const button2 = document.querySelector('[data-js="btnCard2"');
button2.addEventListener("click", () => {
  button2.classList.toggle("active");
});

const button3 = document.querySelector('[data-js="btnCard3"]');
button3.addEventListener("click", () => {
  button3.classList.toggle("active");
});

const button4 = document.querySelector('[data-js="btnCard4"]');
button4.addEventListener("click", () => {
  button4.classList.toggle("active");
});

const button5 = document.querySelector('[data-js="btnCard5"]');
button5.addEventListener("click", () => {
  button5.classList.toggle("active");
});

const button6 = document.querySelector('[data-js="btnCard6"]');
button6.addEventListener("click", () => {
  button6.classList.toggle("active");
});

//Answer button
const answerbtn1 = document.querySelector('[data-js="answerbtn1"]');
const answer1 = document.querySelector('[data-js="answer1"]');

answerbtn1.addEventListener("click", () => {
  answer1.classList.toggle("hidden");
  if (answerbtn1.textContent == "Show Answer") {
    answerbtn1.innerHTML = "Hide Answer";
  } else {
    answerbtn1.innerHTML = "Show Answer";
    answer1.classList.add("hidden");
  }
});
const answerbtn2 = document.querySelector('[data-js="answerbtn2"]');
const answer2 = document.querySelector('[data-js="answer2"]');

answerbtn2.addEventListener("click", () => {
  answer2.classList.toggle("hidden");
  if (answerbtn2.textContent == "Show Answer") {
    answerbtn2.innerHTML = "Hide Answer";
  } else {
    answerbtn2.innerHTML = "Show Answer";
    answer2.classList.add("hidden");
  }
});

const answerbtn3 = document.querySelector('[data-js="answerbtn3"]');
const answer3 = document.querySelector('[data-js="answer3"]');

answerbtn3.addEventListener("click", () => {
  answer3.classList.toggle("hidden");
  if (answerbtn3.textContent == "Show Answer") {
    answerbtn3.innerHTML = "Hide Answer";
  } else {
    answerbtn3.innerHTML = "Show Answer";
    answer3.classList.add("hidden");
  }
});

const answerbtn4 = document.querySelector('[data-js="answerbtn4"]');
const answer4 = document.querySelector('[data-js="answer4"]');

answerbtn4.addEventListener("click", () => {
  answer4.classList.toggle("hidden");
  if (answerbtn4.textContent == "Show Answer") {
    answerbtn4.innerHTML = "Hide Answer";
  } else {
    answerbtn4.innerHTML = "Show Answer";
    answer4.classList.add("hidden");
  }
});

const answerbtn5 = document.querySelector('[data-js="answerbtn5"]');
const answer5 = document.querySelector('[data-js="answer5"]');

answerbtn5.addEventListener("click", () => {
  answer5.classList.toggle("hidden");
  if (answerbtn5.textContent == "Show Answer") {
    answerbtn5.innerHTML = "Hide Answer";
  } else {
    answerbtn5.innerHTML = "Show Answer";
    answer5.classList.add("hidden");
  }
});

const answerbtn6 = document.querySelector('[data-js="answerbtn6"]');
const answer6 = document.querySelector('[data-js="answer6"]');

answerbtn6.addEventListener("click", () => {
  answer6.classList.toggle("hidden");
  if (answerbtn6.textContent == "Show Answer") {
    answerbtn6.innerHTML = "Hide Answer";
  } else {
    answerbtn6.innerHTML = "Show Answer";
    answer6.classList.add("hidden");
  }
});
// Onepager
const allPages = document.querySelectorAll('[data-js*="page"]');
const allLinks = document.querySelectorAll('[data-js*="link"]');

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    allPages.forEach((page) => {
      page.classList.remove("current");
    });
    const hrefAttribute = event.target.getAttribute("href");
    const currentPage = document.querySelector(hrefAttribute);
    console.log(event.target);
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
  console.log(data);

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
console.log(bodyElement);

const toggleButton = document.querySelector('[data-js="toggleDarkMode"');
toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
