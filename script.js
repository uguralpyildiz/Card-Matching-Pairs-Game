const cards = document.querySelectorAll(".cards")
const flipCount = document.querySelector(".flipCount")
const restartBtn = document.querySelector(".restart-btn")
const second = document.querySelector(".nav")
let clickOne, clickTwo;
let disableflip = false;
let matchFlip = 0;
let score = 0;
let sec = 0;
function flipCard(e) {
    let clickedCard = e.target;
    if (clickedCard !== clickOne && !disableflip) {
        score++;
        flipCount.innerHTML = "Flips: " + score
        clickedCard.classList.add("flip")
        if (!clickOne) {
            return clickOne = clickedCard
        }
        clickTwo = clickedCard;
        disableflip = true;
        matchCards()
    }

}

function matchCards() {
    if (clickOne.textContent === clickTwo.textContent) {
        matchFlip++;
        if (matchFlip === 12) {
          setTimeout(() => {
              return shuffle();        
          }, 700);
        }
        clickOne.removeEventListener("click", flipCard)
        clickTwo.removeEventListener("click", flipCard)
        clickOne = clickTwo = "";
        return disableflip = false;
    }
    setTimeout(() => {
        clickOne.classList.remove("flip"), clickTwo.classList.remove("flip")       
        clickOne = clickTwo = "";
        disableflip = false;
    }, 1000);
}

restartBtn.addEventListener("click", () => {
    scoreVbReset()
    cards.forEach(card => {
        card.classList.remove("flip")
        card.addEventListener("click", flipCard);
    });
})

function scoreVbReset() {
    score = 0;
    flipCount.innerHTML = "Flips: " + score;
    matchFlip = 0;
}

function shuffle(){
    scoreVbReset()
    clickOne = clickTwo = "";
    cards.forEach(card => {
        card.classList.remove("flip")
        card.addEventListener("click", flipCard);
    });
}



cards.forEach(card => {
    card.addEventListener("click", flipCard);
});




