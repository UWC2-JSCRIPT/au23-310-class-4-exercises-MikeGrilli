/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const getDeck = () => {
  let deck = []
  let suits = ['hearts', 'spades', 'clubs', 'diamonds']

  suits.forEach(cardType => { 

        for(let i = 1; i <= 13; i ++) {
            
            const card = {
                val : i,
                displayVal: i.toString(),
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