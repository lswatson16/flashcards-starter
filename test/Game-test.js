const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game')
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {
  it('should be a functon', function() {
    const game = new Game();

    expect(Game).to.be.a('function');
  });

  it('should be an instance of game', function() {
    const game = new Game();

    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the current round', function() {
    const game = new Game();

    expect(game.currentRound).to.deep.equal({});
  })

  it('should create a collection of cards to store in the deck', function() {
    const game = new Game();

    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
    expect(game.currentRound.deck.cards.length).to.equal(30);
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
    expect(game.currentRound.deck.cards[0].correctAnswer).to.equal('object');
  });
})
