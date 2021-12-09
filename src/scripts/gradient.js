window.onload = main;

function main() {

let body = document.querySelector("body"); 
let gradient = document.querySelector(".gradient-back"); 

let speedStatus = document.querySelector("#speedStatus")
let angleStatus = document.querySelector("#angleStatus")  
let gradientAngle = document.querySelector(".gradient-angle");
let boxAnim = document.querySelector(".box-anim");
let scrollDisplay = document.querySelector(".grandparent");
let linearBtn = document.querySelector(".linear-button");
let clrCode = document.querySelector(".color-code");
let radClrCode = document.querySelector(".radial-color-code");
clrCode.innerText = gradient.style.background;
radClrCode.innerText = gradient.style.background;

// linearBtn.focus();
// let animation = (document.styleSheets[2].cssRules[0]);
let animation = (document.styleSheets[0].cssRules[0]);
// let miniAnimation = (document.styleSheets[2].cssRules[1]);
let miniAnimation = (document.styleSheets[0].cssRules[1]);

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
let clrId = 4;
let colors = "#00EEFF, #E1FF00, #FF00BB, #8100D6, #0011FF";
// let colorsArr = ["#00EEFF", "#E1FF00", "#FF00BB", "#8100D6", "#0011FF"];
let swatchHash = {
    "a0": "#00EEFF",
    "a1": "#E1FF00",
    "a2": "#FF00BB",
    "a3": "#8100D6",
    "a4": "#0011FF",
};
let clrHash = { 
    "a0": "#00EEFF",
    "a1": "#E1FF00",
    "a2": "#FF00BB",
    "a3": "#8100D6",
    "a4": "#0011FF",
};


clrCode.innerText = 
        gradientVar + "( " 
        + gradientAngle.value + "deg, "
        + colors + " );";

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
    let hex = document.querySelector(`.h2-${id}`);

    swatch.style.backgroundColor = e.target.value;
    hex.innerText = e.target.value;
}

function updateClrArr(e) {
    let id = e.target.id;
    let idDigit = id.slice(1);

    // clrHash[id] = e.target.value;
    swatchHash[id] = e.target.value;
}

// const setBg = () => {
//   const randomColor = Math.floor(Math.random()*16777215).toString(16);
//   document.body.style.backgroundColor = "#" + randomColor;
//   color.innerHTML = "#" + randomColor;
// }

// function genRandomClr() {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     return "#" + randomColor;
//     // color.innerHTML = "#" + randomColor;
// }

// function test() {
//     console.log("asf");
// }

function createColorTile(color) {

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // "#" + randomColor;

    colorTile = document.createElement("input");
    colorTile.type = "color";
    // colorTile.value = "#FFFFFF";
    colorTile.value = "#" + randomColor;
    
    // colorTile.setAttribute("id", `a${colorsArr.length}`);
    colorTile.setAttribute("id", `a${clrId}`);
    
    colorTile.addEventListener("input", changeLabelBack);
    colorTile.addEventListener("change", updateClrArr);

    
}

let deleteClrBtn;

function createDltClrBtn() {
    deleteClrBtn = document.createElement("input");
    deleteClrBtn.setAttribute("type", "submit");
    deleteClrBtn.setAttribute("value", "delete");
    // deleteClrBtn.setAttribute("id", `a${colorsArr.length}`);
    deleteClrBtn.setAttribute("id", `a${clrId}`);

    // deleteClrBtn.setAttribute("id", `_${colorsArr.length}`);
    // deleteClrBtn.setAttribute("id", "_0");
    // deleteClrBtn.setAttribute("class", "delete-clr-btn");
    // deleteClrBtn.style.backgroundColor = "red";

    // deleteBtn = document.querySelector(".delete-clr-btn");
    deleteClrBtn.addEventListener("click", deleteColor);

}

    function deleteColor(e) {
    // debugger

    let id = e.target.id;
    // let idDigit = id.slice(1);
    let swatch = document.querySelector(`.${id}`);
    // debugger
    swatch.remove();
    // clrHash[id] = e.target.value;
    // swatchHash[id] = e.target.value;

    // delete clrHash[id];
    delete swatchHash[id];

    if (Object.values(swatchHash).length < 2){
        pltHead2.style.display =  "inline-block";
        pltHead.style.display = "none";
        // applyErr++;
    }

    // if ( Object.values(clrHash).length === 0 ){
    if ( Object.values(swatchHash).length === 0 ){
        let colorTiles = document.querySelector(".color-tiles");
        colorTiles.remove();
        first = true;

        resetClrBtn.style.display = "none";
        applyClrBtn.style.display = "none";        
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
    // colorLabel.setAttribute("class", `a${colorsArr.length}`);
    colorLabel.setAttribute("class", `a${clrId}`);
}

let clrHex;

function createH2() {
    clrHex = document.createElement("h2");
    // clrHex.setAttribute("class", `h2-a${colorsArr.length}`);
    clrHex.setAttribute("class", `h2-a${clrId}`);
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
let applyErr = 0;

function addColorTile() {
    
    applyErr = 0;

    applyClrBtn.style.display = "inline-block";
    resetClrBtn.style.display = "inline-block";

    pltHead2.style.display = "none";
    pltHead.style.display = "inline-block";

    if (first) {
        first = false;
        colors = "";
        colorNum = 0;
        clrHash = {};
        clrId = 0;
    }

    // let colorErr = document.querySelector(".apply-clr-err");
    // colorErr.innerText = "";

    createClrContainer();
    createClrLabel();
    createH2();
    // clrHex.innerText = colorTile.value;
    createColorTile();
    clrHex.innerText = colorTile.value;
    let clrDiv = document.createElement("div");
    createEditBtn();
    createDltClrBtn();
    colorLabel.style.backgroundColor = colorTile.value;
    
    colorContainer.append(colorLabel);
    colorLabel.append(clrHex);
    colorLabel.append(colorTile);
    colorLabel.append(clrDiv);
    clrDiv.append(editBtn);
    clrDiv.append(deleteClrBtn);

    updateClrTile();
    colorNum++;
    clrId++;
    // colorsArr.push(colorTile.value);
    // clrHash[colorTile.id] = colorTile.value;
    swatchHash[colorTile.id] = colorTile.value;
}

colorButton.addEventListener("click", addColorTile);

function defaultColorTiles() {
    
    // colorsArr.forEach( (color, i) => {
    Object.values(clrHash).forEach( (color, i) => {
        addColorTile();
    
        let label = document.querySelector(`.a${i}`)
        let input = document.querySelector(`#a${i}`)
        let h2 = document.querySelector(`.h2-a${i}`)
    
        input.value = color;
        label.style.backgroundColor = color;
        h2.innerText = color;
    });
    
    // colorsArr = ["#00EEFF", "#E1FF00", "#FF00BB", "#8100D6", "#0011FF"];
    clrHash = { 
                "a0": "#00EEFF",
                "a1": "#E1FF00",
                "a2": "#FF00BB",
                "a3": "#8100D6",
                "a4": "#0011FF",
            };
    swatchHash = {
                "a0": "#00EEFF",
                "a1": "#E1FF00",
                "a2": "#FF00BB",
                "a3": "#8100D6",
                "a4": "#0011FF",
            };
}

defaultColorTiles();



function applyColors() {
    
    if ( Object.values(swatchHash).length < 2 ) {
        pltHead2.style.display =  "inline-block";
        pltHead.style.display = "none";
        applyErr++;
        
        if (applyErr > 0) {
            pltHead2.style.color =  "white";
            pltHead2.style.fontWeight =  "bolder";
            pltHead2.style.fontSize =  "1.2rem";
        }
        return null;
    } 

    applyErr = 0;
    // debugger
    // clrHash = {};
    // clrHash = Object.assign(clrHash, swatchHash);
    clrHash = Object.assign( {}, swatchHash );
    let colors = "";
    // colorsArr.forEach(color => {
    Object.values(clrHash).forEach(color => {
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

        clrCode.innerText = 
        gradientVar + "( " 
        + gradientAngle.value + "deg, "
        + colors + " );";
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

        radClrCode.innerText = 
        gradientVar + "( " 
        + colors + " );";
    }

    gradient.style.backgroundSize = "400% 400%";
    gradient.style.animation = gradientVar
                            + " " + speedStatus.innerText
                            + "s ease infinite";

    boxAnimInner.style.animation = boxAnimMode + " " 
                            + speedStatus.innerText 
                            + "s ease infinite";
                
    // clrCode.innerText = gradient.style.background;
}

function applyClrHash() {
    
    // if (colorNum < 2){
    //     let colorErr = document.querySelector(".apply-clr-err");
    //     colorErr.innerText = "Please select at least two colors.";
    // }
    // debugger
    // clrHash = Object.assign(clrHash, swatchHash);
    // swatchHash = {};
    let colors = "";
    // colorsArr.forEach(color => {
        // debugger
    Object.values(clrHash).forEach(color => {
        if (colors.length === 0){
            colors += color;
        } else {
            colors +=  ", " + color;
        }
    });

    // debugger
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

        clrCode.innerText = 
        gradientVar + "( " 
        + gradientAngle.value + "deg, "
        + colors + " );";
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

        radClrCode.innerText = 
        gradientVar + "( " 
        + colors + " );";
    }

    gradient.style.backgroundSize = "400% 400%";
    gradient.style.animation = gradientVar
                            + " " + speedStatus.innerText
                            + "s ease infinite";

    boxAnimInner.style.animation = boxAnimMode + " " 
                            + speedStatus.innerText 
                            + "s ease infinite";
                
    // clrCode.innerText = gradient.style.background;
}

applyClrBtn.addEventListener("click", applyColors);

//-----------------------------------------------------------
//reset colors
let colorTiles = document.querySelector(".color-tiles");

function resetColors() {
    colors = "";
    colorNum = 0;
    // clrHash = {};
    swatchHash = {};
    
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

const speedInput = document.querySelector(".speed-input");
speedInput.oninput = speedChange;

function speedChange(e) {
    const val = e.target.value;
    speedStatus.innerText = val;
    speedStatus2.innerText = val;
    // body.style.animation = gradientVar + " " + val + "s ease infinite";
    gradient.style.animation = gradientVar + " " + val + "s ease infinite";
    boxAnimInner.style.animation = boxAnimMode + " " 
                            + speedStatus.innerText 
                            + "s ease infinite";}

//------------------------------------------------------------------------------
let angleDisplay = document.querySelector(".angle-display");
let angle = false;

// const speedInput = document.querySelector(".speed-input");
gradientAngle.oninput = angleChange;

function angleChange(e) {
    const val = e.target.value;
    angleStatus.innerText = val;

    angle = true;

    // applyColors();
    applyErr = 0;
    // debugger
    // clrHash = {};
    // clrHash = Object.assign(clrHash, swatchHash);
    // clrHash = Object.assign( {}, swatchHash );
    let colors = "";
    // colorsArr.forEach(color => {
    Object.values(clrHash).forEach(color => {
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

        clrCode.innerText = 
        gradientVar + "( " 
        + gradientAngle.value + "deg, "
        + colors + " );";
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

        radClrCode.innerText = 
        gradientVar + "( " 
        + colors + " );";
    }

    gradient.style.backgroundSize = "400% 400%";
    gradient.style.animation = gradientVar
                            + " " + speedStatus.innerText
                            + "s ease infinite";

    boxAnimInner.style.animation = boxAnimMode + " " 
                            + speedStatus.innerText 
                            + "s ease infinite";
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

// let miniStartLeftText = document.querySelector(".mini-start-left");
// let miniStartTopText = document.querySelector(".mini-start-top");
// let miniMidLeftText = document.querySelector(".mini-mid-left");
// let miniMidTopText = document.querySelector(".mini-mid-top");
// let miniKeyframes = document.querySelector(".mini-keyframes");
// miniKeyframes.innerText = miniAnimation.cssText;

// let bigKeyframes = document.querySelector(".big-keyframes");
// bigKeyframes.innerText = animation.cssText;

let knobValue = document.querySelector(".knob-value");
let scrollAngle = document.querySelector(".scroll-angle");


scrollAngle.oninput = scrollChange;

function scrollChange(e) {
scrollAngle = document.querySelector(".scroll-angle");
    
    const val = e.target.value;

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
    
    // gradient.style.backgroundSize = "400% 400%";
    // gradient.style.animation = "linear-gradient"
    //                         + gradientAngle.value + "deg,"
    //                         + " " + speedStatus.innerText
    //                         + "s ease infinite";
                            

    // boxAnimInner.style.animation = "box-anim" + " " 
    //                         + speedStatus.innerText 
    //                         + "s ease infinite";

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
    // miniKeyframes.innerText = miniAnimation.cssText;
    // bigKeyframes.innerText = animation.cssText;


    knobValue.innerText = Math.round(val * .9) + "°";
    knobNeedle.style.transform = "rotate(" + ((val * .9) + 135) + "deg)";
}

//------------------------------------------------------------------------------
//animation name change
let animationName3 = document.querySelector(".animation-name3");

let nameInput = document.querySelector(".name-input");
nameInput.oninput = nameChange;

function nameChange(e){

    const val = e.target.value;
    // animationName = document.querySelector(".animation-name");
    let animationNames = document.querySelectorAll(".animation-name");

    animationNames.forEach( name => {
        name.innerText = val;
    })
    // animationName.innerText = val;
    animationName2.innerText = val;  
    // animationName3.innerText = val;  
}



//------------------------------------------------------------------------------
//Gradient handlers
// let gradientStatus = document.querySelector("#gradient-status");
// gradientStatus.innerText = gradientVar;

let gradAngleText = document.querySelector(".grad-ang");
let scrollAngleText = document.querySelector(".scroll-angle");
let linearKeyframes = document.querySelector("#keyframes");
let radialKeyframes = document.querySelector(".keyframes-radial");
let knobBorder = document.querySelector(".parent");
let knobNeedle = document.querySelector(".child");
let hide = document.querySelectorAll(".hide");
let radialBtn = document.querySelector(".radial-button")

radialBtn.onclick = handleRadial;
linearBtn.onclick = handleLinear;

function handleRadial() {
    gradientVar = "radial-gradient";
    boxAnimMode = "radial-box-anim";

    // gradientStatus.innerText = gradientVar;
    // angleStatus.innerText = "";
    // gradAngleText.innerText = "";

    gradientAngle.type = "hidden";
    scrollAngle.type = "hidden";

    linearKeyframes.style.display = "none";
    radialKeyframes.style.display = "block";

    knobNeedle.style.display = "none";
    knobBorder.style.display = "none";

    hide.forEach(div => {
        div.style.display = "none";
    });

    linearBtn.classList.remove("active");
    radialBtn.classList.add("active");

    if (Object.values(clrHash).length === 0){
        colorNum = 5;
        colors = "#00EEFF, #E1FF00, #FF00BB, #8100D6, #0011FF";
        clrHash = { 
                    "a0": "#00EEFF",
                    "a1": "#E1FF00",
                    "a2": "#FF00BB",
                    "a3": "#8100D6",
                    "a4": "#0011FF",
                }; 
    }
    applyClrHash();
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
    knobBorder.style.display = "flex";

    radialBtn.classList.remove("active");
    linearBtn.classList.add("active");

    hide.forEach(div => {
        div.style.display = "flex";
    });

    // if (Object.values(clrHash).length === 0){
    //     colorNum = 5;
    //     colors = "#00EEFF, #E1FF00, #FF00BB, #8100D6, #0011FF";
    //     // colorsArr = ["#00EEFF", "#E1FF00", "#FF00BB", "#8100D6", "#0011FF"];
    //     clrHash = { 
    //                 "a0": "#00EEFF",
    //                 "a1": "#E1FF00",
    //                 "a2": "#FF00BB",
    //                 "a3": "#8100D6",
    //                 "a4": "#0011FF",
    //             }; 
    // }
    applyClrHash();
}


let copyAlert = document.querySelector(".copy-alert")
let copyBtn = document.querySelector(".clip-copy");

copyBtn.addEventListener("click", async (e) => {
    // alert("CSS code copied to clipboard.");

    copyAlert.style.display = "inline-block";
    setTimeout(function(){ copyAlert.style.display = "none"; }, 3000);

    let copyCode;

    if (gradientVar === "linear-gradient") {
        copyCode = linearKeyframes.innerText;
    } else {
        copyCode = radialKeyframes.innerText;
    }

        await navigator.clipboard.writeText(copyCode);
        // let copied = await navigator.clipboard.readText();
        // console.log(copied);
});

}