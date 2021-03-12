let body = document.querySelector("body"); 
let gradient = document.querySelector(".gradient-back"); 

let speedStatus = document.querySelector("#speedStatus")
let angleStatus = document.querySelector("#angleStatus")  
let gradientAngle = document.querySelector(".gradient-angle");
let boxAnim = document.querySelector(".box-anim");
let scrollDisplay = document.querySelector(".grandparent");
let linearBtn = document.querySelector(".linear-button");

linearBtn.focus();

// let animation = (document.styleSheets[2].cssRules[0]);
let miniAnimation = (document.styleSheets[2].cssRules[1]);

let gradientVar = "linear-gradient";
gradient.style.animation = gradientVar + " " + speedStatus.innerText + "s ease infinite";

let boxAnimInner = document.querySelector(".inner");
let boxAnimMode = "box-anim";
boxAnimInner.style.animation = boxAnimMode 
                                + " " 
                                + speedStatus.innerText 
                                + "s ease infinite";

//color changes
let colorNum = 5;
// let colors = "#00EEFF, #E1FF00, #FF00BB, #8100D6, #0011FF";
let colorsArr = ["#00EEFF", "#E1FF00", "#FF00BB", "#8100D6", "#0011FF"];

// applyColors();

let colorButton = document.querySelector(".color-button");
let colorInput = document.querySelector(".color-input");
let colorForm = document.querySelector(".color-form");
let first = true;

let colorTile;
let colorLabel;

function changeLabelBack(e) {
    let id = e.target.id;
    let swatch = document.querySelector(`.${id}`);
    swatch.style.backgroundColor = e.target.value;
}

function updateClrArr(e) {
    let id = e.target.id;
    let idDigit = id.slice(1);
    colorsArr[idDigit] = e.target.value;
}

function createColorTile(color) {
    colorTile = document.createElement("input");
    colorTile.type = "color";
    colorTile.value = "#FFFFFF";
    colorTile.setAttribute("id", `a${colorsArr.length}`);
    colorTile.addEventListener("input", changeLabelBack);
    colorTile.addEventListener("change", updateClrArr);
}

let deleteClrBtn;

function createDltClrBtn() {
    deleteClrBtn = document.createElement("input");
    deleteClrBtn.setAttribute("type", "submit");
    deleteClrBtn.setAttribute("value", "delete");
    deleteClrBtn.setAttribute("id", `a${colorsArr.length}`);

    // deleteClrBtn.setAttribute("id", `_${colorsArr.length}`);
    // deleteClrBtn.setAttribute("id", "_0");
    // deleteClrBtn.setAttribute("class", "delete-clr-btn");
    // deleteClrBtn.style.backgroundColor = "red";

    // deleteBtn = document.querySelector(".delete-clr-btn");
    deleteClrBtn.addEventListener("click", deleteColor);

}

function deleteColor(e) {
    // let tile = document.querySelector("._0");
    // tile.remove();
    let id = e.target.id;
    let idDigit = id.slice(1);
    // console.log(e.target.id);
    let swatch = document.querySelector(`.${id}`);
    swatch.remove();
    colorsArr[idDigit] = e.target.value;

    colorsArr.splice(idDigit, 1);
    if (colorsArr.length === 0){
        let colorTiles = document.querySelector(".color-tiles");
        colorTiles.remove();
    }
}


let colorContainer;
let palette = document.querySelector(".palette");

function createClrContainer() {
    if (colorNum === 0) {
        colorContainer = document.createElement("ul");
        colorContainer.setAttribute("class", "color-tiles");
        palette.append(colorContainer);
    }
}

function updateClrTile() {
    // if (colors.length === 0) {
    //     colors += colorTile.value;
    // } else {
    //     colors += ", " + colorTile.value;
    // }
}

function createClrLabel() {
    colorLabel = document.createElement("label");
    colorLabel.setAttribute("class", `a${colorsArr.length}`);
}

let clrHex;

function createH2() {
    clrHex = document.createElement("h2");
    // clrHex.innerText = colorTile.value;
}

let editBtn;

function createEditBtn() {
    editBtn = document.createElement("span");
    editBtn.innerText = "edit";
    editBtn.setAttribute("class", "edit-clr-tile");
}

let applyClrBtn = document.querySelector(".apply-clr-button");
let resetClrBtn = document.querySelector(".reset-clr-btn");
let pltHead = document.querySelector(".plt-head");
let pltHead2 = document.querySelector(".plt-head2");

function addColorTile() {
    // if (!color){
    //     color = "#FFFFFF";
    // }
    applyClrBtn.style.display = "inline-block";
    resetClrBtn.style.display = "inline-block";

    pltHead2.style.display = "none";
    pltHead.style.display = "inline-block";

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
    createH2();
    // clrHex.innerText = colorTile.value;
    createColorTile();
    let clrDiv = document.createElement("div");
    createEditBtn();
    createDltClrBtn();
    
    colorContainer.append(colorLabel);
    colorLabel.append(clrHex);
    colorLabel.append(colorTile);
    colorLabel.append(clrDiv);
    clrDiv.append(editBtn);
    clrDiv.append(deleteClrBtn);

    updateClrTile();
    colorNum++;
    colorsArr.push(colorTile.value);
}

colorButton.addEventListener("click", addColorTile);

function defaultColorTiles() {
    
    colorsArr.forEach( (color, i) => {
        addColorTile();
    
        let label = document.querySelector(`.a${i}`)
        let input = document.querySelector(`#a${i}`)
    
        input.value = color;
        label.style.background = color;
    });
    
    colorsArr = ["#00EEFF", "#E1FF00", "#FF00BB", "#8100D6", "#0011FF"];
}

defaultColorTiles();


function applyColors() {
    
    if (colorNum < 2){
        let colorErr = document.querySelector(".apply-clr-err");
        colorErr.innerText = "Please select at least two colors.";
    }
    
    let colors = "";
    colorsArr.forEach(color => {
        if (colors.length === 0){
            colors += color;
        } else {
            colors +=  ", " + color;
        }
    });

    
    if (gradientVar === "linear-gradient"){
        gradient.style.background = 
        gradientVar + "(" 
        + gradientAngle.value + "deg,"
        + colors + ")"; 

        boxAnim.style.background = 
        gradientVar + "(" 
        + gradientAngle.value + "deg,"
        + colors + ")"; 

        scrollDisplay.style.background = 
        gradientVar + "(" 
        + gradientAngle.value + "deg,"
        + colors + ")";
    } else {
        gradient.style.background = 
        gradientVar + "(" 
        + colors + ")";

        boxAnim.style.background = 
        gradientVar + "(" 
        + colors + ")"; 

        scrollDisplay.style.background = 
        gradientVar + "(" 
        + colors + ")";
    }

    gradient.style.backgroundSize = "400% 400%";
    gradient.style.animation = gradientVar
                            + " " + speedStatus.innerText
                            + "s ease infinite";

    boxAnimInner.style.animation = boxAnimMode + " " 
                            + speedStatus.innerText 
                            + "s ease infinite";
}

applyClrBtn.addEventListener("click", applyColors);

//-----------------------------------------------------------
//reset colors
let colorTiles = document.querySelector(".color-tiles");

function resetColors() {
    colors = "";
    colorNum = 0;
    colorsArr = [];
    
    resetClrBtn.style.display = "none";
    applyClrBtn.style.display = "none";
    pltHead.style.display = "none";
    pltHead2.style.display = "inline-block";

    let colorTiles = document.querySelector(".color-tiles");
    colorTiles.remove();
}

resetClrBtn.addEventListener("click", resetColors);


//-----------------------------------------------------------------------------
//speed change
let speedStatusRadial = document.querySelector("#speedStatus2")

function speedChange(val) {
    speedStatus.innerText = val;
    speedStatus2.innerText = val;
    // body.style.animation = gradientVar + " " + val + "s ease infinite";
    gradient.style.animation = gradientVar + " " + val + "s ease infinite";
    boxAnimInner.style.animation = boxAnimMode + " " 
                            + speedStatus.innerText 
                            + "s ease infinite";}

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

let miniStartLeft = startLeft * 3;
let miniStartTop = startTop * 3;
let miniMidLeft = midLeft * 3;
let miniMidTop = midTop * 3;

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

let miniStartLeftText = document.querySelector(".mini-start-left");
let miniStartTopText = document.querySelector(".mini-start-top");
let miniMidLeftText = document.querySelector(".mini-mid-left");
let miniMidTopText = document.querySelector(".mini-mid-top");
let miniKeyframes = document.querySelector(".mini-keyframes");
miniKeyframes.innerText = miniAnimation.cssText;

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

    miniStartLeft = startLeft * 3;
    miniStartTop = startTop * 3;
    miniMidLeft = midLeft * 3;
    miniMidTop = midTop * 3;

    animation.deleteRule("0%");
    animation.deleteRule("50%");
    animation.deleteRule("100%");

    miniAnimation.deleteRule("0%");
    miniAnimation.deleteRule("50%");
    miniAnimation.deleteRule("100%");
    
    animation.appendRule(`0%{background-position:${startLeft}% ${startTop}%}`);
    animation.appendRule(`50%{background-position:${midLeft}% ${midTop}%}`);
    animation.appendRule(`100%{background-position:${startLeft}% ${startTop}%}`);

    miniAnimation.appendRule(`0%{transform: translateX(${miniStartLeft}%) translateY(${miniStartTop}%)}`);
    miniAnimation.appendRule(`50%{transform: translateX(${miniMidLeft}%) translateY(${miniMidTop}%)}`);
    miniAnimation.appendRule(`100%{transform: translateX(${miniStartLeft}%) translateY(${miniStartTop}%)}`);
    
    // miniAnimation.appendRule(`0%{transform:translateX(${miniStartLeft}%) translateY${miniStartTop}%}`);
    // miniAnimation.appendRule(`50%{transform:translateX(${miniMidLeft}%) translateY${miniMidTop}%}`);
    // miniAnimation.appendRule(`100%{transform:translateX(${miniStartLeft}%) translateY${miniStartTop}%}`);
//     @keyframes box-anim {
//     0% {transform: translateX(150%) translateY(0%);}
//     50% {transform: translateX(150%) translateY(300%);}
//     100% {transform: translateX(150%) translateY(0%);}
// }

    startLeftText.innerText = startLeft;
    startTopText.innerText = startTop;
    endLeftText.innerText = startLeft;
    endTopText.innerText = startTop;
    midLeftText.innerText = midLeft;
    midTopText.innerText = midTop;

    // miniStartLeftText.innerText = miniStartLeft;
    // miniStartTopText.innerText = miniStartTop;
    // miniMidLeftText.innerText = miniMidLeft;
    // miniMidTopText.innerText = miniMidTop;
    miniKeyframes.innerText = miniAnimation.cssText;


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

let scrollAngle = document.querySelector(".scroll-angle");
let gradAngleText = document.querySelector(".grad-ang");
let scrollAngleText = document.querySelector(".scroll-angle");
let linearKeyframes = document.querySelector("#keyframes");
let radialKeyframes = document.querySelector(".keyframes-radial");
let knobBorder = document.querySelector(".parent");
let knobNeedle = document.querySelector(".child");

function handleRadial() {
    gradientVar = "radial-gradient";
    boxAnimMode = "radial-box-anim";

    // gradientStatus.innerText = gradientVar;
    angleStatus.innerText = "";
    gradAngleText.innerText = "";

    gradientAngle.type = "hidden";
    scrollAngle.type = "hidden";

    linearKeyframes.style.display = "none";
    radialKeyframes.style.display = "block";

    knobNeedle.style.display = "none";
    knobBorder.style.display = "none";


    if (colorsArr.length === 0){
        colorNum = 5;
        colors = "#00EEFF, #E1FF00, #FF00BB, #8100D6, #0011FF";
        colorsArr = ["#00EEFF", "#E1FF00", "#FF00BB", "#8100D6", "#0011FF"]; 
    }
    applyColors();
}

function handleLinear() {
    gradientVar = "linear-gradient";
    boxAnimMode = "box-anim";
    // gradientStatus.innerText = gradientVar;
    angleStatus.innerText = angle;

    gradientAngle.type = "range";
    scrollAngle.type = "range";

    linearKeyframes.style.display = "block";
    radialKeyframes.style.display = "none";

    knobNeedle.style.display = "flex";
    // knobBorder.style.display = "inline-block";
    knobBorder.style.display = "flex";

    if (colorsArr.length === 0){
        colorNum = 5;
        colors = "#00EEFF, #E1FF00, #FF00BB, #8100D6, #0011FF";
        colorsArr = ["#00EEFF", "#E1FF00", "#FF00BB", "#8100D6", "#0011FF"]; 
    }
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