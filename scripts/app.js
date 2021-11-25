function init() {
  const cards = document.querySelectorAll(".card");
  let cardsArray = [...cards];
  const grid = document.querySelector("#grid");
  let flips = 0;
  const flipsCounter = document.querySelector("#flips");
  const timeDisplay = document.querySelector("#time");
  let stopwatchStartTime = null;
  let interval = null;
  let totalTime = document.querySelector("#total-time");
  let totalFlips = document.querySelector("#total-flips");

  const startContainer = document.querySelector("#start-container");
  const startBtn = document.querySelector("#start");
  const againContainer = document.querySelector("#again-container");
  const againBtn = document.querySelector("#play-again");
  const infoContainer = document.querySelector("#info-container");

  let hasFlippedCard = false;
  let firstCard, secondCard;
  let lockBoard = false;

  const gambareAudio = document.querySelector("#gambare");
  const goodJobAudio = document.querySelector("#good-job");
  const sugoiAudio = document.querySelector("#sugoi");
  const repeatAudio = document.querySelector("#repeat");

  function startPopup() {
    startContainer.classList.add("show");
  }

  startBtn.addEventListener("click", () => {
    startContainer.classList.remove("show");
    infoContainer.classList.remove("hide");
    gambareAudio.play();
    startGame();
  });

  function againPopup() {
    let matchedCards = cardsArray.every((card) => {
      return card.classList.contains("flip");
    });
    if (matchedCards) {
      againContainer.classList.add("show");
      infoContainer.classList.add("hide");
      setTimeout(() => {
        sugoiAudio.play();
      }, 1000);
    }
    totalTime.innerHTML = timeDisplay.innerHTML;
    totalFlips.innerHTML = flipsCounter.innerHTML;
  }

  againBtn.addEventListener("click", () => {
    againGame();
    repeatAudio.play();
    againContainer.classList.remove("show");
    infoContainer.classList.remove("hide");
  });

  function shuffle(cardsArray) {
    let currentIndex = cardsArray.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = cardsArray[currentIndex];
      cardsArray[currentIndex] = cardsArray[randomIndex];
      cardsArray[randomIndex] = temporaryValue;
    }
    return cardsArray;
  }

  function startGame() {
    let shufflePop = shuffle(cardsArray);
    shufflePop.forEach(function (card) {
      grid.appendChild(card);
    });
    cards.forEach((card) => card.addEventListener("click", flipCard));
    startTime();
  }

  function againGame() {
    cards.forEach((card) => card.classList.remove("flip"));
    cards.forEach((card) => card.addEventListener("click", flipCard));
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
    flips = 0;
    flipsCounter.innerHTML = flips;
    timeDisplay.innerHTML = "00 mins 00 secs";
    clearInterval(interval);
    interval = null;
    startGame();
  }

  function flipCount() {
    flips++;
    flipsCounter.innerHTML = flips;
    //if (flips === 1) {
    //}
  }

  function startTime() {
    if (interval === null) {
      stopwatchStartTime = Date.now();
      interval = setInterval(updateDisplay, 10);
    }
  }

  function updateDisplay() {
    const elapsedTime = new Date(Date.now() - stopwatchStartTime);
    const minutes = elapsedTime.getMinutes().toString().padStart(2, "0");
    const seconds = elapsedTime.getSeconds().toString().padStart(2, "0");
    timeDisplay.innerHTML = `${minutes} mins ${seconds} secs`;
  }

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add("flip");

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
    } else {
      hasFlippedCard = false;
      secondCard = this;
      checkForMatch();
    }
  }

  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
      flipCount();
      goodJobAudio.play();
      againPopup();
    } else {
      lockBoard = true;
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        lockBoard = false;
        flipCount();
      }, 1000);
    }
  }

  window.onload = startPopup();
}

document.addEventListener("DOMContentLoaded", init);

// NOTES
//(!hasFlippedCard) means "is false"
