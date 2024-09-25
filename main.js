import { animals } from "./animals.js";
import { colors } from "./colors.js";
import { shapes } from "./shapes.js";
import { numbers } from "./numbers.js";
import { foods } from "./foods.js";

var circle = document.querySelector(".container");
var genButton = document.querySelector(".genButton");
var nextButton = document.querySelector(".nextButton");
var container = document.querySelector(".fullContainer");
var answer = document.querySelector(".answer");
var navSelectors = document.querySelectorAll(".navSelector");
var showAnswerLink = document.querySelector("#showAnswers")
navSelectors.forEach((navSelector) => {
  navSelector.onclick = (e) => {
    e.preventDefault();
    startQuiz(navSelector);
  };
});

showAnswerLink.onclick = (e) => {
  e.preventDefault();
  showAnswer = true;
};

const startQuiz = (navSelector) => {
  circle.style.backgroundImage = "";
  circle.innerHTML = "";
  
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
    case "bwa'ame":
      initQuiz(navSelector.text, foods);
      break;
    case "hinaikiame":
      initNumberQuiz(navSelector.text, numbers);
      break;
    case "have":
      initHaveQuiz()
    default:
      console.log(`No quiz available.`);
  }
};

let answerText = document.querySelector(".answerText");
let currentPosition = 0;
let showAnswer = false;

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
    let content = yaqui_name
    if (!showAnswer) {
      content = content.replaceAll(/\s/g, "    ")
      .replaceAll(/[A-Za-z]/g, "_ ");
    }
    answerText.innerHTML = content;
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

function initHaveQuiz() {
  document.querySelector(".bodyContainer").style.backgroundImage = "none";
  document.querySelector(".title").innerHTML = "Have?";
  const animalContainer = document.createElement("div");
  circle.style.display = "none";
  document.querySelector(".controls").style.display = "none";
  // show all animals in image grid
  const shuffledArray = shuffleArray(animals);
  const colContainer = document.querySelector(".colContainer")
  animalContainer.style.backgroundColor = "white";
  animalContainer.style.padding = "5px";
  animalContainer.style.flexDirection = "row";
  animalContainer.style.display = "flex";
  animalContainer.style.flexWrap = "wrap";
  animalContainer.style.gap = "10px"; // Optional: Adds space between flex items
  // colContainer.style.display = "grid";
  // colContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(100px, 1fr))";
  // colContainer.style.gap = "10px"; // Optional: Adds space between grid items
  shuffledArray.map((animal) => {
    console.log("animal", animal);
    const animalDiv = document.createElement("img");
    animalDiv.src = animal.url;
    animalDiv.width = "125";
    animalDiv.height = "125";
    animalContainer.appendChild(animalDiv);
  } );
  colContainer.appendChild(animalContainer);
}
