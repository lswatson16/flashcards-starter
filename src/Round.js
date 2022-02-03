const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    // get the current card
    let currentCard = this.returnCurrentCard();
    // create a new turn & pass in current card
    const turn = new Turn(guess, currentCard);
    this.turns++;
    console.log(currentCard.id, "current id")
    if (guess !== currentCard.correctAnswer) {
      this.incorrectGuesses.push(currentCard.id);
    }
    return turn;
  }

}

module.exports = Round;
