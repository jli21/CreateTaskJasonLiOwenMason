var deck = ["2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AC", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD", "AD", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH", "AH", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AS"];
var deckValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
var handValue = [];
var currentCard = 0;
var randCard;


function hit() {
    currentCard++;
    randCard = Math.floor(Math.random() * deck.length);
    console.log(randCard);
    document.getElementById(`card${currentCard}`).src=`../images/${deck[randCard]}.png`;
    handValue.push(deckValues.splice(randCard, 1));
    deck.splice(randCard, 1);
    if (Math.sum(handValue) > 21) {
        bust();
    }
}

function pass() {
    
}

function deal() {

}

function bust() {

}