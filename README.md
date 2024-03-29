
 ## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### Overview


### The challenge

Requirements:
- build it from "scratch"
- use classes
- use backgroung-image
- Google font: inter

Stretch Goals:
- change the quote and background image
- use flexbox instead
- change color of quote box on :hover
- make quote box a link that opens a URL in a new tab
- place the quote box exactly in the center
- JavaScript: display a random quote on every refresh
- JavaScript: display a random background image on every refresh

 ### Screenshot

### Links

- Scrim: [Scrim](https://scrimba.com/scrim/co66f4672bc42a373fbd1968f)
- Github: [Github](https://github.com/casserole27/counter-app)
- Live Site: [Live Site](https://www.clewisdev.com/counter-app/)

## My process

Create Github repository
- initialize README

Setup basic HTML file 
- insert my personal comment credit
- head tag includes stylesheet/link and fonts, double check for meta viewport tag
- initial semantic, accessible markup: placing main, heading and paragraph tags
 - commit and push

Setup basic CSS file
- insert my personal comment credit
- decide on mobile or desktop-first design based on design file examples
- set up root selector with variables: colors, border radius, and font size
- margin, padding, box-size reset, root
- decide on global styles
- commit and push

Consult Figma design files
 - use rems or ems
 - adjust text properties: size, line height, color
 - insert images and color properties
 - decide on layout tools and markup accordingly
 - add effects: borders, box shadows, etc
 - commit and push after each major change

Publish live URL

Check markup and accessibility
(https://validator.w3.org/)
(https://wave.webaim.org/)
 - make adjustments as necessary
 - commit and push
 - finish README


### Built with

- CSS custom properties
- Responsive Web Design

### What I learned

### Continued development


### Useful resources

[Scrimba help](https://projects.scrimba.com/inspirational-quote-page)

[CSS outline property](https://www.w3schools.com/css/css_outline.asp)

[Border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image)

Scrimba M5

```javascript
function highlightCheckedOption(e){

    const radios = document.getElementsByClassName('radio')
    //! removes styling
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    //! adds styling
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}
```

## Author

- Website - [C Lewis](https://www.clewisdev.com)
- LinkedIn - [LinkedIn](https://www.linkedin.com/in/clewisdev/)


## Acknowledgments





