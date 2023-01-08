const cards = document.querySelectorAll(".cards")
const flipCount = document.querySelector(".flipCount")
let score = 0;

cards.forEach(card => {
    card.addEventListener("click", () => {
      score++;
      card.classList.toggle("flip")
       flipCount.innerHTML = "Flips: "+score
   }) 
});
