let body = document.querySelector("body"); 
let gradient = document.querySelector(".gradient-back"); 

let speedStatus = document.querySelector("#speedStatus")
let angleStatus = document.querySelector("#angleStatus")  

let animation = (document.styleSheets[2].cssRules[0]);
let gradientVar = "linear-gradient";
// body.style.animation = gradientVar + " " + speedStatus.innerText + "s ease infinite";
gradient.style.animation = gradientVar + " " + speedStatus.innerText + "s ease infinite";

//color changes
let colorNum = 5;
let colors = "#00EEFF, #E1FF00, #FF00BB, #8100D6, #0011FF";
let colorsArr = ["#00EEFF", "#E1FF00", "#FF00BB", "#8100D6", "#0011FF"];
// let colors = "#0011FF, #8100D6, #FF00BB, #E1FF00, #00EEFF";

let colorButton = document.querySelector(".color-button");
let colorInput = document.querySelector(".color-input");
let colorForm = document.querySelector(".color-form");
let first = true;

let colorTile;
let colorLabel;

function createColorTile() {
    colorTile = document.createElement("input");
    colorTile.type = "color";
    colorTile.style.width = "50px";
    colorTile.style.height = "50px";
    colorTile.style.display = "inline-block";
    colorTile.style.position = "relative";
    colorTile.value = "#FFFFFF";
    colorTile.setAttribute("class", "color-tile");
}

let deleteClrBtn;

function createDltClrBtn() {
    deleteClrBtn = document.createElement("input");
    deleteClrBtn.setAttribute("type", "submit");
    deleteClrBtn.setAttribute("value", "Delete");
    // deleteClrBtn.setAttribute("id", `_${colorsArr.length}`);
    deleteClrBtn.setAttribute("id", "_0");
    deleteClrBtn.setAttribute("class", "delete-clr-btn");
    deleteClrBtn.style.backgroundColor = "red";

    // deleteBtn = document.querySelector(".delete-clr-btn");
    deleteClrBtn.addEventListener("click", deleteColor);
}


let colorContainer;

function createClrContainer() {
    if (colors.length === 0) {
        colorContainer = document.createElement("ul");
        colorContainer.setAttribute("class", "color-container");
        colorForm.append(colorContainer);
    }
}

function updateClrTile() {
    if (colors.length === 0) {
        colors += colorTile.value;
    } else {
        colors += ", " + colorTile.value;
    }
}

function createClrLabel() {
    colorLabel = document.createElement("label");
    colorLabel.innerText = "Edit";
    colorLabel.setAttribute("class", `_${colorsArr.length}`);
}

function addColorTile() {
    if (first) {
        first = false;
        colors = "";
        colorNum = 0;
        colorsArr = [];
    }

    let colorErr = document.querySelector(".apply-clr-err");
    colorErr.innerText = "";

    createClrContainer();
    createClrLabel();
    createColorTile();
    createDltClrBtn();
    
    colorContainer.append(colorLabel);
    colorLabel.append(colorTile);
    colorLabel.append(deleteClrBtn);

    updateClrTile();
    colorNum++;
    colorsArr.push(colorTile.value);
}

colorButton.addEventListener("click", addColorTile);



function deleteColor() {
    // let tile = document.querySelector(`.${id}`);
    let tile = document.querySelector("._0");
    // let deletedTile = document.querySelector("." + id);
    // console.log('sdfa');
    // let buttonId = deleteBtn.id;
    // let deletedTile = document.querySelector(`.${id}`);
    tile.remove();
}

// if (deleteBtn){
//     deleteBtn.addEventListener("click", deleteColor);
// }


// let angleDisplayDiv = document.querySelector(".angle-display-div");
let scrollDisplay = document.querySelector(".grandparent");

function applyColors() {

    if (colorNum < 2){
        let colorErr = document.querySelector(".apply-clr-err");
        colorErr.innerText = "Please select at least two colors.";
    }
    
    if (gradientVar === "linear-gradient"){
        gradient.style.background = 
        gradientVar + "(" 
        + angleStatus.innerText + "deg,"
        + colors + ")"; 
        scrollDisplay.style.background = 
        gradientVar + "(" 
        + angleStatus.innerText + "deg,"
        + colors + ")";
    } else {
        gradient.style.background = 
        gradientVar + "(" 
        + colors + ")";
        scrollDisplay.style.background = 
        gradientVar + "(" 
        + colors + ")";
    }

    // body.style.backgroundSize = "400% 400%";
    // body.style.animation = gradientVar
    //                         + " " + speedStatus.innerText
    //                         + "s ease infinite";
    gradient.style.backgroundSize = "400% 400%";
    gradient.style.animation = gradientVar
                            + " " + speedStatus.innerText
                            + "s ease infinite";
}

let applyClrBtn = document.querySelector(".apply-clr-button");
applyClrBtn.addEventListener("click", applyColors);

//-----------------------------------------------------------
let colorTiles = document.querySelectorAll(".color-tile");

function resetColors() {
    colors = "";
    colorNum = 0;
    colorsArr = [];
    
    let colorContainer = document.querySelector(".color-container");
    colorContainer.remove();
}

let resetClrBtn = document.querySelector(".reset-clr-btn");
resetClrBtn.addEventListener("click", resetColors);


//-----------------------------------------------------------------------------
//speed change
let speedStatusRadial = document.querySelector("#speedStatus2")

function speedChange(val) {
    speedStatus.innerText = val;
    speedStatus2.innerText = val;
    // body.style.animation = gradientVar + " " + val + "s ease infinite";
    gradient.style.animation = gradientVar + " " + val + "s ease infinite";
}

//------------------------------------------------------------------------------
let angleDisplay = document.querySelector(".angle-display");
let angle = 0;

function angleChange(val) {
    angleStatus.innerText = val;
    angleDisplay.innerText = val;
    angle = val;

    applyColors();
}


//------------------------------------------------------------------------------
// scroll angle
let startLeft = 50;
let startTop = 0;
let midLeft = 50;
let midTop = 100;

let animationName = document.querySelector(".animation-name");
let animationName2 = document.querySelector(".animation-name2");

animationName.innerText = 'AnimationName';
animationName2.innerText = 'AnimationName';

let startLeftText = document.querySelector(".start-left");
let startTopText = document.querySelector(".start-top");
let endLeftText = document.querySelector(".end-left");
let endTopText = document.querySelector(".end-top");
let midLeftText = document.querySelector(".mid-left");
let midTopText = document.querySelector(".mid-top");

let knobValue = document.querySelector(".knob-value");

function scrollChange(val) {
    
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

    startLeftText.innerText = startLeft;
    startTopText.innerText = startTop;
    endLeftText.innerText = startLeft;
    endTopText.innerText = startTop;
    midLeftText.innerText = midLeft;
    midTopText.innerText = midTop;

    knobValue.innerText = Math.round(val * .9) + "°";
    knobNeedle.style.transform = "rotate(" + (val * .9) + "deg)";
}

//------------------------------------------------------------------------------
//animation name change
let animationName3 = document.querySelector(".animation-name3");

function nameChange(val){
    animationName.innerText = val;
    animationName2.innerText = val;  
    animationName3.innerText = val;  
}

let name = document.querySelector("#name-input");

//------------------------------------------------------------------------------
//Gradient handlers
// let gradientStatus = document.querySelector("#gradient-status");
// gradientStatus.innerText = gradientVar;

let gradientAngle = document.querySelector(".gradient-angle");
let scrollAngle = document.querySelector(".scroll-angle");
let gradAngleText = document.querySelector(".grad-ang");
let scrollAngleText = document.querySelector(".scroll-angle");
let linearKeyframes = document.querySelector("#keyframes");
let radialKeyframes = document.querySelector(".keyframes-radial");
let knobBorder = document.querySelector(".parent");
let knobNeedle = document.querySelector(".child");

function handleRadial() {
    gradientVar = "radial-gradient";

    // gradientStatus.innerText = gradientVar;
    angleStatus.innerText = "";
    gradAngleText.innerText = "";

    gradientAngle.type = "hidden";
    scrollAngle.type = "hidden";

    linearKeyframes.style.display = "none";
    radialKeyframes.style.display = "block";

    knobNeedle.style.display = "none";
    knobBorder.style.display = "none";


    applyColors();
}

function handleLinear() {
    gradientVar = "linear-gradient";
    // gradientStatus.innerText = gradientVar;
    angleStatus.innerText = angle;

    gradientAngle.type = "range";
    scrollAngle.type = "range";

    linearKeyframes.style.display = "block";
    radialKeyframes.style.display = "none";

    knobNeedle.style.display = "flex";
    // knobBorder.style.display = "inline-block";
    knobBorder.style.display = "flex";

    applyColors();
}

// function getfocus() {
//   document.getElementById("myAnchor").focus();
// }

// function losefocus() {
//   document.getElementById("myAnchor").blur();
// }





// var colors = ["red", "orange", "white", "yellow", "green", "blue", "purple", "black"];
//             var currentIndex = 0;

//             setInterval(function () {
//                 document.body.style.cssText = "background-color: " + colors[currentIndex];
//                 currentIndex++;
//                 if (currentIndex == undefined || currentIndex >= colors.length) {
//                     currentIndex = 0;
//                 }
//             }, 1000);