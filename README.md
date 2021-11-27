# Project One - Javascricpt Browser Game

The task was to build a simple grig game that can be played in the browser.

[Click to play Matchy Match Anime Boys]( https://ksaltedsalter.github.io/project-1-memory-game/)

## Table of contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Process](#process)

## Technologies

Project is created with:

- JavaScript
- HTML
- Sass (SCSS)
- GitHub

## Setup

 - Access the source code via the 'Clone or download' button 
 - Open the index.html file in your browser of choice to start

## Process

I started off by deciding what type of grid game I would like to make. I chose a memery card flipping game as it would allow for some fun styling, use of transformations and a general love of memory games. I created a very brief sketch of how i wanted the game to look on the browser and what elements would be needed.
I then did a lot of research into how I was going to go about making the game and it's functionality. I created it on a small scale first with only 4 cards and minimal styling to make aspects clearer then wheni was happy with the functionality i expanded the game and added in extra features such as timers, modals and more styling,

## Challanges

- It was my first time working with modals and i has an issue with the layering. At first the modal was underneath the game. This chalange helped me to learn about indexs and how to arrange them 
- during my walk thorughs of the game i noticed that there was an issue with the timer and it was incrementing on the card flips and not the actual seconds taken. This challenge helped me to notice that it matters where functions are mbeing called. I moved where i started the timer and was able to fix that functionality. unfortunatly that set off a different issue where the timer would continue asfter the game has finished. I was unable to fix this bug and chose instead to make it invisible once the ending modlal popped up. the timer would restart correctly.

### Wins

- the first time i could get the card to filp and stay flipped if i clicked its match was such a win for me. at this point i had written enoigh bjkbk
- the randomisation function of the cards shuffle. It was a function that a came accross on my reasearch and i was fun in implement soemthing not learnt in class
- overall reaching a really good ending place in my game where i was at a point where i wanted to add extra features

## Future

- fix the timer bug
- add another level with a different card set.
- i wanted the timer to pulse but was unable to figure out how to do this without 
