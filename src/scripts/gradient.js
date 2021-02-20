var color1 = document.querySelector(".color1"); 
var color2 = document.querySelector(".color2"); 
var color3 = document.querySelector(".color3"); 
var color4 = document.querySelector(".color4"); 
var color5 = document.querySelector(".color5"); 
var sky = document.querySelector(".sky"); 
  
// Changing color for the gradient 
function changeGradient() { 
    sky.style.background = 
        "linear-gradient(" 
        + color1.value + ", " 
        + color2.value + ", " 
        + color3.value + ", " 
        + color4.value + ", " 
        + color5.value + ")"; 
    sky.style.backgroundSize = "400% 400%";
    sky.style.animation = "gradient-animation 5s ease infinite";
} 

color1.addEventListener("input", changeGradient); 
color2.addEventListener("input", changeGradient); 
color3.addEventListener("input", changeGradient); 
color4.addEventListener("input", changeGradient); 
color5.addEventListener("input", changeGradient); 