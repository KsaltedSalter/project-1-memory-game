# Project One - JavaScript Browser Game

The task was to build a simple grid game that can be played in the browser.

![Screenshot 2021-11-27 at 12 25 30](https://user-images.githubusercontent.com/85836801/143681430-cb5c5273-22ec-421c-89bf-220e28064cbf.png)

[Click to play Matchy Match Anime Boys](https://ksaltedsalter.github.io/project-1-memory-game/)

## Table of contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Process](#process)
- [Challenges](#challenges)
- [Wins](#wins)
- [Future](#future)

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

I started off by deciding what type of grid game I would like to make. I chose a memory card flipping game as it would allow for some fun styling, use of transformations and a general love of memory games. I created a very brief sketch of how I wanted the game to look on the browser and what elements would be needed.
I then did a lot of research into how I was going to go about making the game and it's functionality. I created it on a small scale first with only 4 cards and minimal styling to make aspects clearer then, when I was happy with the basic functionality I expanded the amount of cards and added in extra features such as timers, modals and more styling.

## Challenges

- It was my first time working with modals and I had an issue with the layering. At first the modal was underneath the game. This challenge helped me to learn about indexes and how to arrange them.
- during my numerous walk throughs of the game I noticed that there was an issue with the timer and it was incrementing on the card flips and not the actual seconds taken. This challenge helped me to notice that it matters where functions are being called. I moved where I started the timer and was able to fix that functionality. Unfortunately, that set off a different issue where the timer would continue after the game had finished. I was unable to fix this bug and chose instead to make the timer invisible once the ending modal activated and visible again on replay.

### Wins

- The first time I could get the card to flip and stay flipped if I clicked its match was such a win for me. At this point I had written two separate functions to flip the card and to check for a match and invoking them to work together was interesting.
- The randomisation function for the cards shuffle was another win. It was a function that I had come across in my research and it was fun to implement something not learnt in class.
- I really enjoyed adding the sound functionality to the game.
- Overall reaching a really good ending place in my game. Being at a point where I wanted to add extra features gave me a good sense of time management in coding projects and showed me what I was able to achieve in a week.

## Future

- My first main fix would be the timer bug that I discuss in the Challenges.
- I would add another level with a different card set. This would make the game itself more interesting.
- I wanted the timer to pulse on every second but was unable to figure out how to do this without the grid div bouncing the cards as well.
