let player = {
    name: "Teboho",
    chips: 145
}
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let cards = [];
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#card-el");
let playerEl = document.getElementById("player-el"); 

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard > 10){
        return 10;
    }
    else if (randomCard === 1){
        return 11
    }
    else {
    return randomCard;
    }
}

function startGame(){
    isAlive = true;
    let card1 = getRandomCard();
    let card2 = getRandomCard();

    cards = [card1, card2];
    sum =  card1 + card2;

    renderGame();
}

function renderGame(){
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }

    if (sum <= 20){
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "Yay! You've got blackjack.";
        hasBlackJack = true;
    }
    else {
        message = "Sorry, you lost.";
        isAlive = false;
    }
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message; 
}

function newCard(){
    if (hasBlackJack === false && isAlive === true){
    let newbie = getRandomCard();
    sum += newbie;
    cards.push(newbie)
    renderGame()
    }
}