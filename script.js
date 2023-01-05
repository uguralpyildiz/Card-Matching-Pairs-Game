const card = document.querySelectorAll(".card")

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", () => {
        var items = ["elma", "armut", "karpuz", "ananas"]
        var randomN = Math.floor(Math.random() * items.length) 
        console.log(items[randomN])
        card[0].innerHTML = items[randomN]
    });
}
