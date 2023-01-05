const card = document.querySelectorAll(".card")

for (let i = 0; i < card.length; i++) {
    var randomN = Math.floor(Math.random() * card.length)
    card[i].addEventListener("click", ()=>{
        console.log(randomN)
    });   
}