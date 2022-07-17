// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//P: a card with a number and a suit
//R: the suit in lowercase
//E:
//P:

function defineSuit(card) {
  if(card.includes('♣')) return 'clubs'
  if(card.includes('♦')) return 'diamonds'
  if(card.includes('♥')) return 'hearts'
  if(card.includes('♠')) return 'spades'
}