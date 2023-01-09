const cards = document.querySelectorAll(".cards")
const flipCount = document.querySelector(".flipCount")
const restartBtn = document.querySelector(".restart-btn")
const second = document.querySelector(".second")
let cardOne, cardTwo;
let disableflip = false;
let matchFlip = 0;
let score = 0;
let sec = 0;


function flipCard(e) {
    let clickedCard = e.target;
    if (clickedCard !== cardOne && !disableflip) {
        score++;
        flipCount.innerHTML = "Flips: " + score
        clickedCard.classList.add("flip")
        if (!cardOne) {
            return cardOne = clickedCard
        }
        cardTwo = clickedCard;
        disableflip = true;
        matchCards()
    }

}

function matchCards() {
    if (cardOne.textContent === cardTwo.textContent) {
        matchFlip++;
        if (matchFlip === 12) {
          setTimeout(() => {
              return shuffle();        
          }, 700);
        }
        cardOne.removeEventListener("click", flipCard)
        cardTwo.removeEventListener("click", flipCard)
        cardOne = cardTwo = "";
        return disableflip = false;
    }
    setTimeout(() => {
        cardOne.classList.remove("flip"), cardTwo.classList.remove("flip")       
        cardOne = cardTwo = "";
        disableflip = false;
    }, 1000);
}


setInterval(() => {
    sec++;
    second.innerHTML = sec + "s"
}, 1000);


function shuffle(){
    score = 0;
    flipCount.innerHTML = "Flips: " + score;
    matchFlip = 0;
    cardOne = cardTwo = "";
    cards.forEach(card => {
        card.classList.remove("flip")
        card.addEventListener("click", flipCard);
    });
}

restartBtn.addEventListener("click", () => {
    setTimeout(() => {
        shuffle()
    }, 700);
})

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});




