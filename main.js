var circle = document.querySelector(".container");
var genButton = document.querySelector(".genButton");
var container = document.querySelector(".fullContainer");
var answer = document.querySelector(".answer");

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
var circleColorName = document.querySelector(".colorName");
function randomColorGen(name){
  var val = Math.floor(Math.random() * 10);
  var yaqui_name = Object.keys(colors)[val]
  if (yaqui_name == name){
    return randomColorGen(name)
  } else {
    return yaqui_name
  }
}
function genColor(){
  let yaqui_name;
  genButton.onclick = function(){
    circleColorName.innerHTML = '';
    yaqui_name = randomColorGen(circleColorName.innerHTML)
    circleColorName.innerHTML = yaqui_name.replaceAll(/[A-Za-z]/g, "_ ");
    answer.classList.remove("hidden")
    circle.classList.add("anim");
    circle.style.backgroundColor = colors[yaqui_name];
    setTimeout(() => circle.classList.remove("anim"),1000);
   }

  answer.onclick = function(){
    if (yaqui_name) {
      circleColorName.innerHTML = yaqui_name;
      answer.classList.add("hidden")
    }
  }
 }
genColor()


