const cards = document.querySelectorAll(".card");
cards.forEach((card) => card.addEventListener("click", flip));
var isFlipped = false;
var fisrtCard;
var secondCard;

function flip() {
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    fisrtCard = this;
  } else {
    secondCard = this;

    checkIt();
  }
}

function checkIt() {
  if (fisrtCard.dataset.image === secondCard.dataset.image) {
    succes();
  } else {
    fail();
  }
}

function succes() {
    console.log('succes');
    fisrtCard.removeEventListener("click", flip)
    secondCard.removeEventListener("click", flip);
    reset();
}

function fail() {
    console.log('fail');
setTimeout(() => {
   fisrtCard.classList.remove("flip")
secondCard.classList.remove("flip")
reset();
},300)
}

function reset() {
    isFlipped = false;
 fisrtCard =null;
 secondCard = null;
}

(function shuffle(){
    cards.forEach(card =>{
        var index = Math.floor(Math.random()*16);
        card.style.order = index;
    })
})();