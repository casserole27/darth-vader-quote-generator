
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

const switchTopGray = document.getElementsByClassName("switch-top-gray");
const switchBotGray = document.getElementsByClassName("switch-bottom-gray");
//! Creates array-like structure
//! Loops are required for .classlist and event listeners
//? https://stackoverflow.com/questions/32852752/js-class-toggle-not-working-with-getelementsbyclassname
//? https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class


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

    const graySwitchTarget = e.target.dataset.switch

    if(graySwitchTarget) {
        graySwitchOnOff()
    }
};


function redSwitchOnOff() {
    switchTopRed.classList.toggle('red-switch-on-top');
    switchBotRed.classList.toggle('red-switch-on-bottom');
}

function graySwitchOnOff() {
    Array.from(switchTopGray).forEach(function(grayTop) {
        grayTop.classList.toggle('gray-switch-on-top');
    })
    Array.from(switchBotGray).forEach(function(grayBottom) {
        grayBottom.classList.toggle('gray-switch-on-bottom');
    })

}


/****** EVENT LISTENERS *******/

chestPlate.addEventListener("click", targetButtons);
switchTopRed.addEventListener("click", redSwitchOnOff);
switchBotRed.addEventListener("click", redSwitchOnOff);
