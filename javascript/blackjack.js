var deck = ["2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AC", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD", "AD", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH", "AH", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AS"];
var deckValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
var handValue = [];
var dealerValue = [];
var currentCard = 0;
var currentDealerCard = 0;
var randCard;
var playerTurn = true;
var score = 0;
var playerHitDelay = false;
var dealerHitDelay = false;

function hit() {
    if (playerTurn && !playerHitDelay){
        playerHitDelay = true;
        currentCard++;
        randCard = Math.floor(Math.random() * deck.length);
        document.getElementById("animationImg").style.display = "block"
        document.getElementById("animationImg").src = `../images/${deck[randCard]}.png`;
        document.getElementById(`animationImg`).style.animationName = "slideInPlayer";
        window.setTimeout('playerAnimationDelay()', 800);

    }
}

function playerAnimationDelay() {
    document.getElementById("animationImg").style.display = "none";
    document.getElementById(`card${currentCard}`).style.display = "inline";
    document.getElementById(`card${currentCard}`).src = `../images/${deck[randCard]}.png`;
    handValue.push(deckValue[randCard]);
    deckValue.splice(randCard, 1);
    deck.splice(randCard, 1);
    console.log("playerVal: " + sum(handValue));
    document.getElementById("playerScoreHeader").innerHTML ="Player: " + sum(handValue);
        if (sum(handValue) > 21 && handValue.includes(11)) {
        handValue[handValue.indexOf(11)] = 1;
    }
    if (sum(handValue) > 21) {
        playerTurn = false;
        pass();
    } else {
        playerHitDelay = false;    
    }
}
function manualPass() {
    playerTurn = false;
    pass();
}

function pass() {
    if (!playerTurn && !dealerHitDelay) {
        dealerHitDelay = true;
        currentDealerCard++;
        randCard = Math.floor(Math.random() * deck.length);
        document.getElementById("animationImg").style.display = "block";
        document.getElementById("animationImg").src = `../images/${deck[randCard]}.png`;
        document.getElementById(`animationImg`).style.animationName = "slideInDealer";
        window.setTimeout('dealerAnimationDelay()', 800);
    }
}

function dealerAnimationDelay() {
    document.getElementById("animationImg").style.display = "none";
    document.getElementById(`dealerCard${currentDealerCard}`).src=`../images/${deck[randCard]}.png`;
    dealerValue.push(deckValue[randCard]);
    deckValue.splice(randCard, 1)
    deck.splice(randCard, 1);
    console.log("dealerVal: " + sum(dealerValue));
    document.getElementById("dealerScoreHeader").innerHTML ="Dealer: " + sum(dealerValue);
    if (sum(dealerValue) > 21 && dealerValue.includes(11)) {
        dealerValue[dealerValue.indexOf(11)] = 1;
    }
    if (sum(dealerValue) > 16) {
        end();
    } else {
        dealerHitDelay = false;
        pass();
    }
    
}

function end() {
    console.log(sum(dealerValue));
    if (sum(handValue) > 21) {
        console.log("checkpoint2");
        win("dealerWin");
    } 
    else if (sum(dealerValue) > 21) {
        console.log("checkpoint3");
        win("playerWin");
    }
    else if (sum(dealerValue) >= sum(handValue)){
        console.log("checkpoint4");

        win("dealerWin");
    } 
    else if (sum(handValue) > sum(dealerValue)) {
        console.log("checkpoint5");

        win("playerWin");
    }
    reset();
}

function win(winner) {
    if (winner == "playerWin") {
        console.log(winner);
    }
    else if (winner == "dealerWin") {
        console.log(winner);
    }
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