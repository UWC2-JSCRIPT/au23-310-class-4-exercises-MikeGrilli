/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */

function getDeck() {
  const deck = []
  const suits = ["Heart", "Diamond", "Clover", "Spade"]
  suits.forEach(item => {

      for(let i = 1; i <= 13; i ++) {
          
          const cards = {
                    val : i,
                    displayVal: i,
                    suit: item
                  }
                  
          if(cards.displayVal === 1) {
            cards.displayVal = "Ace"
          } 
          else if( cards.displayVal === 11) {
            cards.displayVal = "Jack"
            cards.val = 10
          } 
          else if( cards.displayVal === 12) {
            cards.displayVal = "Queen"
            cards.val = 10
          } 
          else if( cards.displayVal === 13) {
            cards.displayVal = "King"
            cards.val = 10
          }

          if(cards.displayVal === "Ace") {
              cards.val = 11 

          }

      deck.push(cards)

      }
  })
  return deck
}

console.log(getDeck()) 
// CHECKS
const deck = getDeck()
console.log(`Deck length equals 52? ${deck.length === 52}`)

const randomCard = deck[Math.floor(Math.random() * 52)]

const cardHasVal =
  randomCard && randomCard.val && typeof randomCard.val === 'number'
console.log(`Random card has val? ${cardHasVal}`)

const cardHasSuit =
  randomCard && randomCard.suit && typeof randomCard.suit === 'string'
console.log(`Random card has suit? ${cardHasSuit}`)

const cardHasDisplayVal =
  randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string'
console.log(`Random card has display value? ${cardHasDisplayVal}`)
