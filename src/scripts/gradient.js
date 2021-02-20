let color1 = document.querySelector(".color1"); 
let color2 = document.querySelector(".color2"); 
let color3 = document.querySelector(".color3"); 
let color4 = document.querySelector(".color4"); 
let color5 = document.querySelector(".color5"); 
let sky = document.querySelector(".sky"); 
let sliderNum = document.querySelector("#sliderStatus")
  
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
    sky.style.animation = "gradient-animation " + sliderNum.innerText + "s ease infinite";
} 

color1.addEventListener("input", changeGradient); 
color2.addEventListener("input", changeGradient); 
color3.addEventListener("input", changeGradient); 
color4.addEventListener("input", changeGradient); 
color5.addEventListener("input", changeGradient); 


function sliderChange(val) {
    sliderNum.innerText = val;
    sky.style.animation = "gradient-animation " + val + "s ease infinite";
}