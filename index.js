
/****** MODULES ******/

// import { quotes } from '/data.js';

export const quotes = [
    {
        quote: "If you're not with me, then you're my enemy!",
        media: "Star Wars Episode III: Revenge of the Sith"
    },
    {
        quote: "Anakin Skywalker was weak. I destroyed him.",
        media: "Star Wars Rebels"
    },

    {
        quote: "I am what you made me.",
        media: "Star Wars : Obi-Wan Kenobi"
    },

    {
        quote: "Your strength has returned, but the weakness still remains.",
        media: "Star Wars : Obi-Wan Kenobi"
    },

    {
        quote: "Anakin Skywalker was weak. I destroyed him.",
        media: "Star Wars Rebels"
    },

    {
        quote: "Be careful not to choke on your aspirations.",
        media: "Rogue One : A Star Wars Story"
    },

    {
        quote: "I find your lack of faith disturbing.",
        media: "Star Wars Episode IV : A New Hope"
    },

    {
        quote: "When I left you, I was but the learner. Now, I am the master.",
        media: "Star Wars Episode IV : A New Hope"
    },

    {
        quote: "I am altering the deal. Pray I don't alter it any further.",
        media: "Star Wars Episode V : The Empire Strikes Back"
    },

    {
        quote: "There is no escape. Don't make me destroy you.",
        media: "Star Wars Episode V : The Empire Strikes Back"
    },

    {
        quote: "No...I am your father.",
        media: "Star Wars Episode V : The Empire Strikes Back"
    },

    {
        quote: "You may dispense with the pleasantries. I'm here to put you back on schedule.",
        media: "Star Wars Episode VI : Return of the Jedi"
    },

    {
        quote: "You don't know the power of the dark side.",
        media: "Star Wars Episode VI : Return of the Jedi"
    },

    {
        quote: "You are unwise to lower your defenses!",
        media: "Star Wars Episode VI : Return of the Jedi"
    },

]

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







