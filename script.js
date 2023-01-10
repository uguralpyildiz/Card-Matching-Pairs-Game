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
    if (clickOne.innerHTML === clickTwo.innerHTML) {
        matchFlip++;
        if (matchFlip === 12) {
          setTimeout(() => {
              return shuffle();        
          }, 1700);
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
    shuffleCards()
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
    shuffleCards()
    scoreVbReset()
    clickOne = clickTwo = "";
    cards.forEach(card => {
        card.classList.remove("flip")
        card.addEventListener("click", flipCard);
    });
}

function shuffleCards() {
    var cardContents = [];
    for (let i = 0; i < cards.length; i++) {
        cardContents.push(cards[i].innerHTML)
    }
    cardContents = shuffleArray(cardContents);
    for (let i = 0; i < cards.length; i++) {
        cards[i].innerHTML = cardContents[i];
    }
}

function shuffleArray(array) {
    for (var i = array.length -1; i > 0; i--){
        var j = Math.floor(Math.random()* (i+1));
        var temp = array[i];
        array[i] = array[j]
        array[j] = temp;
    }
    return array;
}


// shuffleCards()


cards.forEach(card => {
    card.addEventListener("click", flipCard);
});




