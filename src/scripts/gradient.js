let body = document.querySelector("body"); 

let color1 = document.querySelector(".color1"); 
let color2 = document.querySelector(".color2"); 
let color3 = document.querySelector(".color3"); 
let color4 = document.querySelector(".color4"); 
let color5 = document.querySelector(".color5");

let speedStatus = document.querySelector("#speedStatus")
let angleStatus = document.querySelector("#angleStatus")  

let animation = (document.styleSheets[2].cssRules[0]);
let gradientVar = "linear-gradient";
body.style.animation = gradientVar + " " + speedStatus.innerText + "s ease infinite";

function changeGradient() { 
    
    if (gradientVar === "linear-gradient"){
    body.style.background = 
        gradientVar + "(" 
        + angleStatus.innerText + "deg,"
        + color1.value + ", " 
        + color2.value + ", " 
        + color3.value + ", " 
        + color4.value + ", " 
        + color5.value + ")"; 
    } else {
        body.style.background = 
        gradientVar + "(" 
        + color1.value + ", " 
        + color2.value + ", " 
        + color3.value + ", " 
        + color4.value + ", " 
        + color5.value + ")";
    }
    body.style.backgroundSize = "400% 400%";
    body.style.animation = gradientVar + " " + speedStatus.innerText + "s ease infinite";
} 

color1.addEventListener("input", changeGradient); 
color2.addEventListener("input", changeGradient); 
color3.addEventListener("input", changeGradient); 
color4.addEventListener("input", changeGradient); 
color5.addEventListener("input", changeGradient); 


function speedChange(val) {
    speedStatus.innerText = val;
    body.style.animation = gradientVar + " " + val + "s ease infinite";
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
    body.style.animation = animation.name + " " + speedStatus.innerText + "s ease infinite";
}


// scroll angle

let startLeft = 50;
let startTop = 0;
let midLeft = 50;
let midTop = 100;

let scrollStatus = document.querySelector("#scroll-status");
let animationName = document.querySelector(".animation-name");
let animationName2 = document.querySelector(".animation-name2");
animationName.innerText = 'AnimationName';
animationName2.innerText = 'AnimationName';

function scrollChange(val) {
    scrollStatus.innerText = val;
    
    if (val >= 0 && val <= 50) {
        startLeft = 50 + parseInt(val);
        startTop = 0;
        midLeft = 50 - parseInt(val);
        midTop = 100;
    } else if (val > 50 && val <= 100) {
        startLeft = 0;
        startTop = 100 - (parseInt(val) - 50);
        midLeft = 100;
        midTop = parseInt(val) - 50;
    } else if (val > 100 && val <= 150) {
        startLeft = 0;
        startTop = Math.abs(parseInt(val) - 150);
        midLeft = 100;
        midTop = parseInt(val) - 50;
    } else if (val > 150 && val <= 250) {
        startLeft = parseInt(val) - 150;
        startTop = 0;
        midLeft = Math.abs(parseInt(val) - 250);
        midTop = 100;
    } else if (val > 250 && val <= 350) {
        startLeft = 0;
        startTop = Math.abs(parseInt(val) - 350);
        midLeft = 100;
        midTop = parseInt(val) - 250;
    } else if (val > 350 && val <= 400) {
        startLeft = parseInt(val) - 350;
        startTop = 0;
        midLeft = Math.abs(parseInt(val) - 450);
        midTop = 100;
    }
    
    animation.deleteRule("0%");
    animation.deleteRule("50%");
    animation.deleteRule("100%");
    
    animation.appendRule(`0%{background-position:${startLeft}% ${startTop}%}`);
    animation.appendRule(`50%{background-position:${midLeft}% ${midTop}%}`);
    animation.appendRule(`100%{background-position:${startLeft}% ${startTop}%}`);

    keyframes.innerText = animation.cssText;
}




//animation name change
function nameChange(val){
    // if (val) {
    //     animation.name = val;
    animationName.innerText = val;
    animationName2.innerText = val;
    //     body.style.animation = animation.name + " " + speedStatus.innerText + "s ease infinite";
    // }
}

let name = document.querySelector("#name-input");


//Gradient handlers
let gradientStatus = document.querySelector("#gradient-status");
gradientStatus.innerText = gradientVar;

function handleRadial() {
    gradientVar = "radial-gradient";
    gradientStatus.innerText = gradientVar;
    angleStatus.innerText = null;

    body.style.background = 
        gradientVar + "(" 
        + color1.value + ", " 
        + color2.value + ", " 
        + color3.value + ", " 
        + color4.value + ", " 
        + color5.value + ")"; 
    body.style.backgroundSize = "400% 400%";
    body.style.animation = gradientVar + " " + speedStatus.innerText + "s ease infinite";
    
}

function handleLinear() {
    gradientVar = "linear-gradient";
    gradientStatus.innerText = gradientVar;

    body.style.background = 
        "linear-gradient (" 
        + angleStatus.innerText + "deg,"
        + color1.value + ", " 
        + color2.value + ", " 
        + color3.value + ", " 
        + color4.value + ", " 
        + color5.value + ")"; 
    body.style.backgroundSize = "400% 400%";
    body.style.animation = gradientVar + " "
                            + speedStatus.innerText
                            + "s ease infinite";
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