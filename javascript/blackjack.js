var deck = ["2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AC", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD", "AD", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH", "AH", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AS"];
var deckValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
var handValue = [];
var dealerValue = [];
var currentCard = 0;
var currentDealerCard = 0;
var randCard;
var playerTurn = true;


function hit() {
    if (playerTurn){
        currentCard++;
        randCard = Math.floor(Math.random() * deck.length);
        console.log(randCard);
        document.getElementById(`card${currentCard}`).src=`../images/${deck[randCard]}.png`;
        handValue.push(deckValue[randCard]);
        deckValue.splice(randCard, 1);
        deck.splice(randCard, 1);
        console.log(sum(handValue));
        if (sum(handValue) > 21 && handValue.includes(11)) {
            handValue[handValue.indexOf(11)] = 1;
        }
        if (sum(handValue) > 21) {
            playerTurn = false;
            pass();
        }
    }
}

function pass() {
    if (!playerTurn) {
        currentDealerCard++;
        randCard = Math.floor(Math.random() * deck.length);
        console.log(randCard);
        document.getElementById(`dealerCard${currentDealerCard}`).src=`../images/${deck[randCard]}.png`;
        dealerValue.push(deckValue[randCard]);
        deckValue.splice(randCard, 1)
        deck.splice(randCard, 1);
        if (sum(dealerValue) > 21 && dealerValue.includes(11)) {
            dealerValue[dealerValue.indexOf(11)] = 1;
        }
        if (sum(dealerValue) > 17) {
            end();
        } else {
            pass();
        }
    }
}

function deal() {

}

function end() {
    if (sum(handValue) > 21) {
        win("dealer");
    } else if (sum(dealerValue > 21)) {
        win("player");
    }
    else if (sum(dealerValue) >= sum(handValue)){
        win("dealer");
    } 
    else if (sum(handValue) > sum(dealerValue)) {
        win("player");
    }
    reset();
}

function win(winner) {
    console.log(winner);
    reset();
}

function reset() {
    deck = ["2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AC", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD", "AD", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH", "AH", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AS"];
    deckValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
    handValue = [];
    dealerValue = [];
    currentCard = 0;
    currentDealerCard = 0;

}

function sum(array) {
    var sum = 0;
    for (var k = array.length - 1; k >= 0; k--) {
        sum = sum + array[k];
    }
    return sum;
}