/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}





const deck = document.querySelector('.deck');




function startGame(){
    const cardClass = ['fa-diamond', 'fa-bomb', 'fa-bicycle',
                'fa-anchor', 'fa-leaf', 'fa-bolt','fa-cube',
                'fa-paper-plane-o', 'fa-diamond', 'fa-bomb',
                'fa-bicycle', 'fa-anchor', 'fa-leaf',
                'fa-bolt', 'fa-cube', 'fa-paper-plane-o'
                ];
    const cardHTML = shuffle(cardClass.map(createCard));
    deck.innerHTML = cardHTML.join('');
}
startGame();



function matchCard(){
    if(openedCards[0].firstElementChild.className === openedCards[1].firstChild.className) {
        openedCards[0].classList.add('match');
        openedCards[1].classList.add('match')
        openedCards = [];
    } else{
        setTimeout(function() {
            openedCards.forEach(removeCard);
        }, 1000);
    }
}






function createCard(card){
    const cardTemplate =`<li class="card"><i class="fa ${card}"></i></li>`;
    return cardTemplate;
}


function openCard(clickCard){
    clickCard.classList.add('open', 'show');
}


function pushCard(clickCard){
    openedCards.push(clickCard);
    console.log(openedCards);
}


//if cards don't match, this function should be called
function removeCard(card){
    card.classList.remove('open', 'show');
    openedCards = [];
}


const cards = document.querySelectorAll('.card');
let openedCards = [];

/*event listener is added to the deck and checked for card click target
when the card is clicked, the open and show class are added to the classList,
then pushed into an array.
*/
deck.addEventListener('click', function(evt){
    let card = evt.target;
    if(card.classList.contains('card') && (openedCards.length < 2) && (!card.classList.contains('show'))){
        openCard(card);
        pushCard(card);
        console.log(openedCards.length);
        if(openedCards.length === 2){
            matchCard();
        }
    }
});



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
