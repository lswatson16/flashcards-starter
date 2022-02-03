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
    if (guess === currentCard.correctAnswer) {
      return 'correct!';
    } else {
      this.incorrectGuesses.push(currentCard.id);
      return 'incorrect!';
    }
  }

  calculatePercentCorrect() {
    let results = Math.round(100 * ((this.turns - this.incorrectGuesses.length) / this.turns));
    return results
  }

  endRound() {
    if (this.turns === 3) {
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }
  }
}

module.exports = Round;
