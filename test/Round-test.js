const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {
  let card1, card2, card3, deck

  beforeEach('instance of Round', function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to pass in a deck of cards', function() {
    const round = new Round(deck);

    expect(round.deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should return the current card being played', function() {
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  // it('should create new instance of Turn', function() {
  //   const round = new Round(deck);
  //
  //   // const turn = round.takeTurn('sea otter')
  //
  //   // expect(round.takeTurn('sea otter')).to.be.an.instanceof(Turn);
  //   expect(turn.guess).to.equal('sea otter');
  // });

  it('should start turns at 0', function() {
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it('should update the turns count', function() {
    const round = new Round(deck);

    round.takeTurn();

    expect(round.turns).to.equal(1);
  });

  it('should update the turns count', function() {
    const round = new Round(deck);

    round.takeTurn();
    round.takeTurn();
    round.takeTurn();

    expect(round.turns).to.equal(3);
  });

  it('the next card becomes the current card', function() {
    const round = new Round(deck);
    const firstCard = round.returnCurrentCard();
    expect(firstCard).to.deep.equal(card1);

    round.takeTurn();

    const secondCard = round.returnCurrentCard();
    expect(secondCard).to.deep.equal(card2);
  });

  it('should start with an empty array of incorrect guesses', function() {
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should store the incorrect guesses in an array via the id', function() {
    const round = new Round(deck);
    const currentCard = round.returnCurrentCard();

    round.takeTurn('pug');

    expect(round.incorrectGuesses).to.deep.equal([currentCard.id]);
  });

  it('should return feedback when the guess is correct', function() {
    const round = new Round(deck);
    // const currentCard = round.returnCurrentCard();

    expect(round.takeTurn('sea otter')).to.equal('correct!');
  });

  it('should return feedback when the guess is incorrect', function() {
    const round = new Round(deck);

    expect(round.takeTurn('pug')).to.equal('incorrect!');
    expect(round.takeTurn('dolphin')).to.equal('incorrect!');
  });

})
