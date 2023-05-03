
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

const showQuote = () => {
    const randomQuotes = quotes.map((quote) => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return {
            quote: quotes[randomIndex].quote,
            media: quotes[randomIndex].media
        };
    });

    quoteText.innerText = randomQuotes[0].quote;
    mediaText.innerText = randomQuotes[0].media;
};

const targetButtons = e => {
    if (e.target.tagName === 'BUTTON') {
        showQuote();
    };
};


const redSwitchOnOff = () => {
    switchTopRed.classList.toggle("red-switch-on-top");
    switchBotRed.classList.toggle("red-switch-on-bottom");
};

const graySwitchOneOnOff = () => {
    switchTopGrayOne.classList.toggle("gray-switch-on-top");
    switchBotGrayOne.classList.toggle("gray-switch-on-bottom");
};

const graySwitchTwoOnOff = () => {
    switchTopGrayTwo.classList.toggle("gray-switch-on-top");
    switchBotGrayTwo.classList.toggle("gray-switch-on-bottom");
};

const graySwitchThreeOnOff = () => {
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







