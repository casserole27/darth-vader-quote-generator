
/****** MODULES ******/

import { quotes } from '/data.js';

/****** VARIABLES ******/

const chestPlate = document.getElementById("chest-plate");

const quoteText = document.getElementById("quote-text");
const mediaText = document.getElementById("media-text");

/****** RED SWITCH ******/

const switchTopRed = document.getElementById("switch-top-red");
const switchBotRed = document.getElementById("switch-bottom-red");

/****** GRAY SWITCHES *******/

const switchTopGrayOne = document.getElementById("gray-top-one");
const switchTopGrayTwo = document.getElementById("gray-top-two");
const switchTopGrayThree = document.getElementById("gray-top-three");

const switchBotGrayOne = document.getElementById("gray-bottom-one");
const switchBotGrayTwo = document.getElementById("gray-bottom-two");
const switchBotGrayThree = document.getElementById("gray-bottom-three");

/****** FUNCTIONS ******/

function showQuote () {

    let text = quotes;

    for (let i = 0; i < quotes.length; i++) {
        let randomQuote = Math.floor(Math.random() * text.length);

        quoteText.innerText = text[randomQuote].quote;
        mediaText.innerText = text[randomQuote].media;
    };
 
};

function targetButtons(e) {
    
    if(e.target.tagName === 'BUTTON') {
        showQuote();
    };
};


function redSwitchOnOff() {
    switchTopRed.classList.toggle("red-switch-on-top");
    switchBotRed.classList.toggle("red-switch-on-bottom");
};

function graySwitchOneOnOff() {
    switchTopGrayOne.classList.toggle("gray-switch-on-top");
    switchBotGrayOne.classList.toggle("gray-switch-on-bottom");
};

function graySwitchTwoOnOff() {
    switchTopGrayTwo.classList.toggle("gray-switch-on-top");
    switchBotGrayTwo.classList.toggle("gray-switch-on-bottom");
};

function graySwitchThreeOnOff() {
    switchTopGrayThree.classList.toggle("gray-switch-on-top");
    switchBotGrayThree.classList.toggle("gray-switch-on-bottom");
};


/****** EVENT LISTENERS *******/

chestPlate.addEventListener("click", targetButtons);
switchTopRed.addEventListener("click", redSwitchOnOff);
switchBotRed.addEventListener("click", redSwitchOnOff);

switchTopGrayOne.addEventListener("click", graySwitchOneOnOff);
switchBotGrayOne.addEventListener("click", graySwitchOneOnOff);
switchTopGrayTwo.addEventListener("click", graySwitchTwoOnOff);
switchBotGrayTwo.addEventListener("click", graySwitchTwoOnOff);
switchTopGrayThree.addEventListener("click", graySwitchThreeOnOff);
switchBotGrayThree.addEventListener("click", graySwitchThreeOnOff);






//TODO IDEAS FOR GROUPING GRAY SWITCHES TOGETHER
//!How to toggle top and bottom classes at the same time?

// const graySwitches = document.querySelectorAll(".switch-gray")

// const switchTopGray = document.querySelectorAll(".switch-top-gray");
// const switchBotGray = document.querySelectorAll(".switch-bottom-gray");
//! Creates array-like structure
//! Loops are required for .classlist and event listeners
//? https://stackoverflow.com/questions/32852752/js-class-toggle-not-working-with-getelementsbyclassname
//? https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class


// function graySwitchOnOff() {

    // Array.from(switchTopGray).forEach(function(grayTop) {
    //     grayTop.classList.toggle('gray-switch-on-top');
    // })
    // Array.from(switchBotGray).forEach(function(grayBottom) {
    //     grayBottom.classList.toggle('gray-switch-on-bottom');
    // })
// }

// graySwitches.forEach(switches => {
//         switches.addEventListener("click", function() {
//             const graySwitchTop = document.querySelectorAll(".switch-top-gray")
//             graySwitchTop.forEach(topSwitch => {
//                 topSwitch.classList.toggle("gray-switch-on-top");     
//             })
//             const graySwitchBottom = document.querySelectorAll(".switch-bottom-gray")
//             graySwitchBottom.forEach(bottomSwitch => {
//                 bottomSwitch.classList.toggle("gray-switch-on-bottom")
//             })
       
//         })
//     })   