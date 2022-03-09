var circle = document.querySelector(".container");
var genButton = document.querySelector(".genButton");
var container = document.querySelector(".fullContainer");
var answer = document.querySelector(".answer");
var navSelectors = document.querySelectorAll(".navSelector")

var colors = {
  "siiki / sikili": "red", 
  "teweli / tewei": "blue",
  "husai": "brown",
  "sawa hewei": "orange",
  "sikhewei": "pink",
  "tosai": "white",
  "sawai": "yellow",
  "chukuli": "black",
  "siari": "green",
  "husai": "brown",
  "kut tewei": "purple",
}

const animals = {
  "chu'u": "https://media.npr.org/assets/img/2021/08/06/dog-4415649-18eab39206426b985f7a5f69e3146a2cd1a56c0d-s1100-c50.jpg",
  "miisi": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "wikit": "https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "teku": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "maaso": "https://images.pexels.com/photos/34231/antler-antler-carrier-fallow-deer-hirsch.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "chikul": "https://images.pexels.com/photos/301448/pexels-photo-301448.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "taavu": "https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "totoi": "https://images.pexels.com/photos/2006800/pexels-photo-2006800.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "huli": "https://images.pexels.com/photos/10830792/pexels-photo-10830792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "taawe": "https://images.pexels.com/photos/1056104/pexels-photo-1056104.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
}

var answerText = document.querySelector(".answerText");
function selectRandom(object, name){
  var val = Math.floor(Math.random() * Object.keys(object).length);
  var yaqui_name = Object.keys(object)[val]
  if (yaqui_name == name){
    return selectRandom(object, name)
  } else {
    return yaqui_name
  }
}
function initColor(title){
  document.querySelector(".title").innerHTML = title

  let yaqui_name;
  genButton.onclick = function(){
    answerText.innerHTML = '';
    yaqui_name = selectRandom(colors, answerText.innerHTML)
    answerText.innerHTML = yaqui_name.replaceAll(/[A-Za-z]/g, "_ ");
    answer.classList.remove("hidden")
    circle.classList.add("anim");
    circle.style.backgroundColor = colors[yaqui_name];
    setTimeout(() => circle.classList.remove("anim"),1000);
   }

  answer.onclick = function(){
    if (yaqui_name) {
      answerText.innerHTML = yaqui_name;
      answer.classList.add("hidden")
    }
  }
}

function initAnimals(title){
  document.querySelector(".title").innerHTML = title
  let yaqui_name;
  genButton.onclick = function(){
    answerText.innerHTML = '';
    yaqui_name = selectRandom(animals, answerText.innerHTML)
    answerText.innerHTML = yaqui_name.replaceAll(/[A-Za-z]/g, "_ ");
    answer.classList.remove("hidden")
    circle.classList.add("anim");
    circle.style.backgroundImage = `url('${animals[yaqui_name]}')`;
    circle.style.backgroundSize = "contain";
    setTimeout(() => circle.classList.remove("anim"),1000);
   }

  answer.onclick = function(){
    if (yaqui_name) {
      answerText.innerHTML = yaqui_name;
      answer.classList.add("hidden")
    }
  }
}

