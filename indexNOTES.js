/****** MODULES ******/

import { quotes } from '/data.js';

/****** VARIABLES ******/

const chestPlate = document.getElementById("chest-plate");

const quoteText = document.getElementById("quote-text");
const mediaText = document.getElementById("media-text");

const switches = document.querySelectorAll('.switch');

/****** FUNCTIONS ******/

function showQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  quoteText.innerText = quotes[randomQuote].quote;
  mediaText.innerText = quotes[randomQuote].media;
}

function targetButtons(e) {
  if (e.target.tagName === 'BUTTON') {
    showQuote();
  }
}

function toggleSwitch(switchElement) {
  switchElement.classList.toggle("gray-switch-on-top");
  switchElement.nextElementSibling.classList.toggle("gray-switch-on-bottom");
}

function handleSwitchClick(e) {
  if (e.target.classList.contains('switch')) {
    toggleSwitch(e.target);
  }
}

/****** EVENT LISTENERS *******/

chestPlate.addEventListener("click", targetButtons);

switches.forEach(switchElement => {
  switchElement.addEventListener('click', handleSwitchClick);
});


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

// switches.addEventListener("click", function(e) {
//     if (e.target.className === "switch-top-gray") {
//         console.log(`Reveal ${e.target.classList}`)
//         graySwitchOnOff()
//     }
//     if (e.target.className === "switch-bottom-gray") {
//         console.log(`Reveal ${e.target.classList}`)
//         graySwitchOnOff()
//     }
// })