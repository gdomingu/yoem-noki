var circle = document.querySelector(".container");
var container = document.querySelector(".fullContainer");

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
  circle.onclick = function(){
    var yaqui_name = randomColorGen(circleColorName.innerHTML)
    
    circle.classList.add("anim");

    circleColorName.innerHTML = yaqui_name;
    circle.style.backgroundColor = colors[yaqui_name];
    setTimeout(() => circle.classList.remove("anim"),1000);
   }
 }
genColor()


