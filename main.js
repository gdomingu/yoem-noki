import { animals } from "./animals.js";
import { colors } from "./colors.js";
import { shapes } from "./shapes.js";
import { numbers } from "./numbers.js";

var circle = document.querySelector(".container");
var genButton = document.querySelector(".genButton");
var nextButton = document.querySelector(".nextButton");
var container = document.querySelector(".fullContainer");
var answer = document.querySelector(".answer");
var navSelectors = document.querySelectorAll(".navSelector");
navSelectors.forEach((navSelector) => {
  navSelector.onclick = (e) => {
    e.preventDefault();
    startQuiz(navSelector);
  };
});

const startQuiz = (navSelector) => {
  switch (navSelector.id) {
    case "hiyokim":
      initColor(navSelector.text);
      break;
    case "yolemem":
      initQuiz(navSelector.text, animals);
      break;
    case "ka_nananam":
      initQuiz(navSelector.text, shapes);
      break;
    case "hinaikiame":
      initNumberQuiz(navSelector.text, numbers);
      break;
    default:
      console.log(`No quiz available.`);
  }
};

let answerText = document.querySelector(".answerText");
let currentPosition = 0;
function shuffleArray(array) {
  currentPosition = 0;
  return array.sort((a, b) => 0.5 - Math.random());
}

function initColor(title) {
  document.querySelector(".title").innerHTML = title;
  const shuffledArray = shuffleArray(colors);
  let yaqui_name;

  const promptQuestion = () => {
    answerText.innerHTML = "";
    let currentColor = shuffledArray[currentPosition];
    yaqui_name = currentColor.name;
    let replacement = yaqui_name
      .replaceAll(/\s/g, "    ")
      .replaceAll(/[A-Za-z]/g, "_ ");
    answerText.innerHTML = replacement;
    answer.classList.remove("hidden");
    circle.classList.add("anim");
    circle.style.backgroundImage = "";
    circle.style.backgroundColor = currentColor.answer;
    setTimeout(() => circle.classList.remove("anim"), 1000);
  };

  promptQuestion();

  nextButton.onclick = () => handleNextClick(promptQuestion, shuffledArray);

  answer.onclick = function () {
    answerText.innerHTML = shuffledArray[currentPosition].name;
    answer.classList.add("hidden");
  };

  genButton.onclick = () => {
    shuffleArray(colors);
    promptQuestion();
  };
}

function initNumberQuiz(title) {
  document.querySelector(".title").innerHTML = title;
  const shuffledArray = shuffleArray(numbers);
  let yaqui_name;

  const promptQuestion = () => {
    answerText.innerHTML = "";
    let currentQuestion = shuffledArray[currentPosition];
    yaqui_name = currentQuestion.name;
    let replacement = yaqui_name
      .replaceAll(/\s/g, "    ")
      .replaceAll(/[A-Za-z]/g, "_ ");
    answerText.innerHTML = replacement;
    answer.classList.remove("hidden");
    circle.classList.add("anim");
    circle.style.backgroundImage = "";
    circle.style.backgroundColor = "black";
    circle.style.color = "white";
    circle.style.fontSize = "60px";
    circle.innerHTML = currentQuestion.circleText
    setTimeout(() => circle.classList.remove("anim"), 1000);
  };

  promptQuestion();

  nextButton.onclick = () => handleNextClick(promptQuestion, shuffledArray);

  answer.onclick = function () {
    answerText.innerHTML = shuffledArray[currentPosition].name;
    answer.classList.add("hidden");
  };

  genButton.onclick = () => {
    shuffleArray(numbers);
    promptQuestion();
  };
}

function initQuiz(title, questions) {
  document.querySelector(".title").innerHTML = title;
  const shuffledArray = shuffleArray(questions);
  let yaqui_name;

  const promptQuestion = () => {
    let currentQuestion = shuffledArray[currentPosition];
    answerText.innerHTML = "";
    yaqui_name = currentQuestion.name;
    answerText.innerHTML = yaqui_name
      .replaceAll(/\s/g, "    ")
      .replaceAll(/[A-Za-z]/g, "_ ");
    answer.classList.remove("hidden");
    circle.classList.add("anim");
    circle.style.backgroundColor = "";
    circle.style.backgroundImage = `url('${currentQuestion.url}')`;
    circle.style.backgroundSize = "cover";
    circle.style.backgroundPosition = "center";

    setTimeout(() => circle.classList.remove("anim"), 1000);
  };

  promptQuestion();

  nextButton.onclick = () => handleNextClick(promptQuestion, shuffledArray);

  answer.onclick = function () {
    answerText.innerHTML = shuffledArray[currentPosition].name;
    answer.classList.add("hidden");
  };

  genButton.onclick = () => {
    shuffleArray(questions);
    promptQuestion();
  };
}

const handleNextClick = (promptQuestion, shuffledArray) => {
  if (currentPosition == shuffledArray.length - 1) {
    alert("All done!");
  } else {
    currentPosition += 1;
    promptQuestion();
  }
};
