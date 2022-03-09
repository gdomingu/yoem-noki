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
  "miisi": "https://images.unsplash.com/photo-1497910091122-9f8a7746eb33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  "wikit": "https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "teku": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "maaso": "https://images.pexels.com/photos/34231/antler-antler-carrier-fallow-deer-hirsch.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "chikul": "https://images.pexels.com/photos/301448/pexels-photo-301448.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "taavu": "https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "totoi": "https://images.pexels.com/photos/2006800/pexels-photo-2006800.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "huli": "https://images.unsplash.com/photo-1563016115-85abfc230672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFkZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "taawe": "https://images.pexels.com/photos/1056104/pexels-photo-1056104.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "choopalau": "https://images.unsplash.com/photo-1577936558471-8b80b49b0117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFjY29vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  "waakas": "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y293fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "sochik": "https://images.unsplash.com/photo-1624248257284-5c6a3060eb72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "machil": "https://images.unsplash.com/photo-1580407613909-edca6a6cd8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNjb3JwaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "vaakot": "https://images.unsplash.com/photo-1472645977521-95bbf4f0a748?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25ha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  "kawis": "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm94fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "semalulukut": "https://images.unsplash.com/photo-1596386447478-d71f5f8fea87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtbWluZ2JpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  "kava'i": "https://images.unsplash.com/photo-1566251037378-5e04e3bec343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  "muumu": "https://images.unsplash.com/photo-1589526261866-ab0d34f8dc19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
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
    circle.style.backgroundSize = "cover";
    setTimeout(() => circle.classList.remove("anim"),1000);
   }

  answer.onclick = function(){
    if (yaqui_name) {
      answerText.innerHTML = yaqui_name;
      answer.classList.add("hidden")
    }
  }
}

