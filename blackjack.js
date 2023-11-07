//import {getDeck} from './createCardDeck.js'
//const blackjackDeck = getDeck();

const { faPersonMilitaryRifle } = require("@fortawesome/free-solid-svg-icons")

const blackjackDeck = () => {
  const deck = []
  const suits = ["Heart", "Diamond", "Clover", "Spade"]

  suits.forEach(cardType => { 

      for(let i = 1; i <= 13; i ++) {
          
          const card = {
                    val : i,
                    displayVal: i,
                    suit: cardType
                  }
                  
          if(card.displayVal === 1) {
            card.displayVal = "Ace"
          } 
          else if( card.displayVal === 11) {
            card.displayVal = "Jack"
            card.val = 10
          } 
          else if( card.displayVal === 12) {
            card.displayVal = "Queen"
            card.val = 10
          } 
          else if( card.displayVal === 13) {
            card.displayVal = "King"
            card.val = 10
          }

          if(card.displayVal === "Ace") {
              card.val = 11 

          }

      deck.push(card)

      }
  })
  return deck
}


// /**
//  * Represents a card player (including dealer).
//  * @constructor
//  * @param {string} name - The name of the player
//  */
class CardPlayer {
  constructor(player, hand) {
    this.player = player
    this.hand = []
  }

  drawCard() {
      const randomNumber = Math.floor(Math.random() * 52)
      const card = blackjackDeck()
      this.hand.push(card[randomNumber])
  }
}; //TODO

// // CREATE TWO NEW CardPlayers
const dealer = new CardPlayer("Dealer"); // TODO
const player = new CardPlayer("Player"); // TODO

 

// /**
//  * Calculates the score of a Blackjack hand
//  * @param {Array} hand - Array of card objects with val, displayVal, suit properties
//  * @returns {Object} blackJackScore
//  * @returns {number} blackJackScore.total
//  * @returns {boolean} blackJackScore.isSoft
//  */
const calcPoints = (hand) => {
  let trackAce = []
  let isSoft = false
  let total = 0
  hand.forEach(card => {
    if(card.displayVal === "Ace") {
      trackAce.push(card)
    }
    total += card.val
  })

  if(trackAce.length >= 1 && total <= 16) {
    total -= 10
    isSoft = true
  }

  if(trackAce.length === 2) {
    total -= 10
    isSoft = true
  }

  return {total, isSoft}
  
}




// /**
//  * Determines whether the dealer should draw another card.
//  * 
//  * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
//  * @returns {boolean} whether dealer should draw another card
//  */


const dealerShouldDraw = (dealerHand) => {
  const getCalcObj = calcPoints(dealerHand)
  const points = getCalcObj.total
  console.log(points)
  if(points <= 16) {
    return true
  } else {
    return false
  }
}


// /**
//  * Determines the winner if both player and dealer stand
//  * @param {number} playerScore 
//  * @param {number} dealerScore 
//  * @returns {string} Shows the player's score, the dealer's score, and who wins
//  */
const determineWinner = (playerScore, dealerScore) => {
  let output = ''
  
  if(playerScore === 21 || playerScore > dealerScore) {
    output = `Player: ${playerScore} | Dealer: ${dealerScore}. Player wins!`
  } 
  else if(dealerScore > playerScore) {
    output = `Dealer: ${dealerScore} | Player: ${playerScore}. Dealer wins!`
  } 
  else if(dealerScore === playerScore) {
    output `Dealer: ${dealerScore} | Player: ${playerScore}. Draw`
  }
  return output

}





/**
 * Creates user prompt to ask if they'd like to draw a card
 * @param {number} count 
 * @param {string} dealerCard 
 */
const getMessage = (count, dealerCard) => {
  return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
}

/**
 * Logs the player's hand to the console
 * @param {CardPlayer} player 
 */
const showHand = (player) => {
  const displayHand = player.hand.map((card) => card.displayVal);
  console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
}

/**
 * Runs Blackjack Game
 */
const startGame = function() {
  player.drawCard();
  dealer.drawCard();
  player.drawCard();
  dealer.drawCard();

  let playerScore = calcPoints(player.hand).total;
  showHand(player);
  while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
    player.drawCard();
    playerScore = calcPoints(player.hand).total;
    showHand(player);
  }
  if (playerScore > 21) {
    return 'You went over 21 - you lose!';
  }
  console.log(`Player stands at ${playerScore}`);

  let dealerScore = calcPoints(dealer.hand).total;
  while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
    dealer.drawCard();
    dealerScore = calcPoints(dealer.hand).total;
    showHand(dealer);
  }
  if (dealerScore > 21) {
    return 'Dealer went over 21 - you win!';
  }
  console.log(`Dealer stands at ${dealerScore}`);

  return determineWinner(playerScore, dealerScore);
}
console.log(startGame());