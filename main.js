var circle = document.querySelector(".container");
var genButton = document.querySelector(".genButton");
var nextButton = document.querySelector(".nextButton");
var container = document.querySelector(".fullContainer");
var answer = document.querySelector(".answer");
var navSelectors = document.querySelectorAll(".navSelector")

var colors = [
  {
    name: "siiki / sikili", 
    answer: "red",
  },
  {
    name: "teweli / tewei", 
    answer: "blue"
  },
  {
    name: "husai", 
    answer: "saddlebrown"
  },
  {
    name: "sawa hewei", 
    answer: "orange"
  },
  {
    name: "sikhewei", 
    answer: "pink"
  },
  {
    name: "tosai", 
    answer: "white"
  },
  {
    name: "sawai", 
    answer: "yellow"
  },
  {
    name: "chukuli", 
    answer: "black"
  },
  {
    name: "siari", 
    answer: "green"
  },
  {
    name: "kut tewei", 
    answer: "purple"
  }
]

const animals = [
  {
    name: "chu'u",
    url: "https://media.npr.org/assets/img/2021/08/06/dog-4415649-18eab39206426b985f7a5f69e3146a2cd1a56c0d-s1100-c50.jpg"
  },
  {
    name: "miisi",
    url: "https://images.unsplash.com/photo-1497910091122-9f8a7746eb33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "wikit",
    url: "https://inaturalist-open-data.s3.amazonaws.com/photos/928/small.jpg"
  },
  {
    name: "teku",
    url: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    name: "maaso",
    url: "https://images.pexels.com/photos/34231/antler-antler-carrier-fallow-deer-hirsch.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    name: "chikul",
    url: "https://images.pexels.com/photos/301448/pexels-photo-301448.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    name: "taavu",
    url: "https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    name: "totoi",
    url: "https://images.pexels.com/photos/2006800/pexels-photo-2006800.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    name: "huli",
    url: "https://images.unsplash.com/photo-1563016115-85abfc230672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFkZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "taawe",
    url: "https://images.pexels.com/photos/1056104/pexels-photo-1056104.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    name: "choopalau",
    url: "https://images.unsplash.com/photo-1577936558471-8b80b49b0117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFjY29vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "waakas",
    url: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y293fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "sochik",
    url: "https://images.unsplash.com/photo-1624248257284-5c6a3060eb72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "machil",
    url: "https://images.unsplash.com/photo-1580407613909-edca6a6cd8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNjb3JwaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "vaakot",
    url: "https://images.unsplash.com/photo-1472645977521-95bbf4f0a748?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25ha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "kawis",
    url: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm94fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "semalulukut",
    url: "https://images.unsplash.com/photo-1596386447478-d71f5f8fea87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtbWluZ2JpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "kava'i",
    url: "https://images.unsplash.com/photo-1566251037378-5e04e3bec343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "muumu",
    url: "https://images.unsplash.com/photo-1589526261866-ab0d34f8dc19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  }
]

let answerText = document.querySelector(".answerText");
let shuffledArray = []
let currentPosition = 0
function shuffleArray(array){
  currentPosition = 0
  shuffledArray = array.sort((a, b) => 0.5 - Math.random());
}

function initColor(title){
  document.querySelector(".title").innerHTML = title
  shuffleArray(colors)

  promptQuestion = () => {
    answerText.innerHTML = '';
    let currentColor = shuffledArray[currentPosition]
    yaqui_name = currentColor.name
    let replacement = yaqui_name.replaceAll(/\s/g, "    ").replaceAll(/[A-Za-z]/g, "_ ");
    console.log(replacement)
    answerText.innerHTML = replacement
    answer.classList.remove("hidden")
    circle.classList.add("anim");
    circle.style.backgroundColor = currentColor.answer;
    setTimeout(() => circle.classList.remove("anim"),1000);
  }

  promptQuestion()

  nextButton.onclick = () => handleNextClick(promptQuestion)

  answer.onclick = function(){
    answerText.innerHTML = shuffledArray[currentPosition].name;
    answer.classList.add("hidden")
  }

  genButton.onclick = () => {
    shuffleArray(colors)
    promptQuestion()
  }
}

function initAnimals(title){
  document.querySelector(".title").innerHTML = title
  shuffleArray(animals)
  let yaqui_name;

  promptQuestion = () => {
    let currentAnimal = shuffledArray[currentPosition]
    answerText.innerHTML = '';
    yaqui_name = currentAnimal.name;
    answerText.innerHTML = yaqui_name.replaceAll(/[A-Za-z]/g, "_ ");
    answer.classList.remove("hidden")
    circle.classList.add("anim");
    circle.style.backgroundImage = `url('${currentAnimal.url}')`;
    circle.style.backgroundSize = "cover";
    setTimeout(() => circle.classList.remove("anim"),1000);
  }

  promptQuestion()

  nextButton.onclick = () => handleNextClick(promptQuestion)

  answer.onclick = function(){
    answerText.innerHTML = shuffledArray[currentPosition].name;
    answer.classList.add("hidden")
  }

  genButton.onclick = () => {
    shuffleArray(animals)
    promptQuestion()
  }
}

handleNextClick = (promptQuestion) => {
  if (currentPosition == shuffledArray.length - 1) {
    alert("All done!")
  } else {
    currentPosition += 1
    promptQuestion()
  }
}

