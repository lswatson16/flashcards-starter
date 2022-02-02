class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
    this.feedback = 'incorrect';
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.currentCard;
  }
  evaluateGuess() {
    if(this.guess === this.currentCard.correctAnswer) {
      this.feedback = 'correct';
      return true;
    } else {
      return false;
    }
  }
  giveFeedback() {
    return this.feedback;
  }
}

module.exports = Turn;
