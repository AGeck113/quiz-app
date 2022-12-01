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
