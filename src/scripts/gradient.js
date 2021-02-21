let body = document.querySelector("body"); 
let color1 = document.querySelector(".color1"); 
let color2 = document.querySelector(".color2"); 
let color3 = document.querySelector(".color3"); 
let color4 = document.querySelector(".color4"); 
let color5 = document.querySelector(".color5"); 
let speedStatus = document.querySelector("#speedStatus")
let angleStatus = document.querySelector("#angleStatus")
  

function changeGradient() { 
    body.style.background = 
        "linear-gradient(" 
        + angleStatus.innerText + "deg,"
        + color1.value + ", " 
        + color2.value + ", " 
        + color3.value + ", " 
        + color4.value + ", " 
        + color5.value + ")"; 
    body.style.backgroundSize = "400% 400%";
    body.style.animation = "gradient-animation " + speedStatus.innerText + "s ease infinite";
} 

color1.addEventListener("input", changeGradient); 
color2.addEventListener("input", changeGradient); 
color3.addEventListener("input", changeGradient); 
color4.addEventListener("input", changeGradient); 
color5.addEventListener("input", changeGradient); 


function speedChange(val) {
    speedStatus.innerText = val;
    body.style.animation = "gradient-animation " + val + "s ease infinite";
}

function angleChange(val) {
    angleStatus.innerText = val;
    body.style.background = 
        "linear-gradient(" 
        + val + "deg,"
        + color1.value + ", " 
        + color2.value + ", " 
        + color3.value + ", " 
        + color4.value + ", " 
        + color5.value + ")"; 
    body.style.backgroundSize = "400% 400%";
    body.style.animation = "gradient-animation " + speedStatus.innerText + "s ease infinite";
}










// var colors = ["red", "orange", "white", "yellow", "green", "blue", "purple", "black"];
//             var currentIndex = 0;

//             setInterval(function () {
//                 document.body.style.cssText = "background-color: " + colors[currentIndex];
//                 currentIndex++;
//                 if (currentIndex == undefined || currentIndex >= colors.length) {
//                     currentIndex = 0;
//                 }
//             }, 1000);