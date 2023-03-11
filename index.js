/****** VARIABLES ******/

const quotes = [
    {
        quote: "If you're not with me, then you're my enemy!",
        media: "Star Wars Episode III"
    },
    {
        quote: "Anakin Skywalker was weak. I destroyed him.",
        media: "Star Wars Rebels"
    },

    {
        quote: "I am what you made me.",
        media: "Star Wars Obi-Wan Kenobi"
    },

    {
        quote: "Your strength has returned, but the weakness still remains.",
        media: "Star Wars Obi-Wan Kenobi"
    },

    {
        quote: "Anakin Skywalker was weak. I destroyed him.",
        media: "Star Wars Rebels"
    },

    {
        quote: "Be careful not to choke on your aspirations.",
        media: "Rogue One: A Star Wars Story"
    },

    {
        quote: "I find your lack of faith disturbing.",
        media: "Star Wars Episode IV"
    },

    {
        quote: "When I left you, I was but the learner. Now, I am the master.",
        media: "Star Wars Episode IV"
    },

    {
        quote: "I am altering the deal. Pray I don't alter it any further.",
        media: "Star Wars Episode V"
    },

    {
        quote: "There is no escape. Don't make me destroy you.",
        media: "Star Wars Episode V"
    },

    {
        quote: "No...I am your father.",
        media: "Star Wars Episode V"
    },

    {
        quote: "You may dispense with the pleasantries. I'm here to put you back on schedule.",
        media: "Star Wars Episode VI"
    },

    {
        quote: "You don't know the power of the dark side.",
        media: "Star Wars Episode VI"
    },

    {
        quote: "You are unwise to lower your defenses!",
        media: "Star Wars Episode VI"
    },

]

const chestPlate = document.getElementById("chest-plate")

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
