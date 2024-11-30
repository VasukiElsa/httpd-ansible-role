let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard , secondCard];
let sum = firstCard + secondCard;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let hasBlackJack = false;
let isAlive = true;
let player = {
    name : "Zaxier",
    chips : 126
}
let playerEl = document.getElementById("player-el");
playerEl.innerHTML = player.name + " : $" + player.chips; 

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13) + 1; /* here to avoid 0 we add +1 to starts with 1 */
    return randomCard;/* Math.random() --> 0.000 to 1.999. If Math.random()*6 
     --> 0.000 to 5.999. Math.floor(3.7854) --> 3.(It removes the decimal points). 
     Then Math.floor(Math.random()) --> range value with removed decimals.
      The range takes n-1 as a last value */
    
}


function startGame(){

renderGame();
}




/* This renderGame() functions calls when it was called by startGame() function , after calling it displays the 
cards in that 'cards' array. Using DOM we affect the innerHtml. In the <cards:> position we render all our cards
in the list then in <Sum:> position we render the sum of the cards using DOM to make affect. 
Then our game starts it starts checking by sum > or < or === to 21 and then display the message using DOM 
to affect the changes. Then we add newCard means the function call makes to push that new card into our 
existing cards array and we summing the cards with already sum variable and then we call renderGame().
Same display process will occur additionally it shows our updated card and sum values.*/

function renderGame(){
    cardsEl.innerHTML = "Cards: ";
    for(let count = 0; count < cards.length; count++){
        cardsEl.innerHTML += " " +cards[count];
    }
    sumEL.innerHTML = "Sum : " +sum;
if(sum <= 20){
    message = "Do you want to draw a new card?";
   
}
else if(sum === 21){
    message = "Wohoo, You've got a Blackjack!";
    hasBlackJack = true;
   
}
else{
    message = "You're out of the game!!";
    isAlive = false;
}
messageEl.innerHTML = message;



}

function newCard(){
    if(hasBlackJack == false && isAlive == true){
        addCards();
    }
}

function addCards(){
    let thatCard = getRandomCard();
    cards.push(thatCard);
    sum += thatCard;
    renderGame();
}


