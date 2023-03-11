/****** VARIABLES ******/

import { quotes } from '/data.js';

const chestPlate = document.getElementById("chest-plate");

const quoteText = document.getElementById("quote-text");
const mediaText = document.getElementById("media-text");

/****** RED SWITCH ******/

const switchTopRed = document.getElementById("switch-top-red")
const switchBotRed = document.getElementById("switch-bottom-red")


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
    switchTopRed.classList.toggle('red-switch-on-top')
    switchBotRed.classList.toggle('red-switch-on-bottom')
}


/****** EVENT LISTENERS *******/

chestPlate.addEventListener("click", targetButtons);
switchTopRed.addEventListener("click", redSwitchOnOff);
switchBotRed.addEventListener("click", redSwitchOnOff);
