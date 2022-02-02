const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

let card

describe('Turn', function() {
  beforeEach('instantiate Card', function() {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  });

  it('it should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be able to return the guess', function() {
    const turn = new Turn('dolphin', card);

    expect(turn.returnGuess()).to.equal('dolphin');
  });

  it('should be able to return the card', function() {
    const turn = new Turn('dolphin', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to check if the user guessed the correct answer', function() {
    const turn = new Turn('sea otter', card);

    // need happy and sad path
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to check if the user guessed the incorrect answer', function() {
    const turn = new Turn('whale', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should be able to return feedback if the guess is correct', function() {
    const turn = new Turn('sea otter', card);

    turn.evaluateGuess();

    expect(turn.feedback).to.equal('correct!')
    expect(turn.giveFeedback()).to.equal('correct!');
  })

  it('should be able to return feedback if the guess is incorrect', function() {
    const turn = new Turn('whale', card);

    turn.evaluateGuess();

    expect(turn.giveFeedback()).to.equal('incorrect!');
  })
})
