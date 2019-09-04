import React, { Component } from 'react';
import Die from './Die'

class DiceGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: [1,1],
      isRolling: false
    };
    this.rollDice = this.rollDice.bind(this)
  }

  rollDice() {
    let num = [];
    while(num.length < 2) {
      num.push(Math.floor(Math.random() * 6) + 1)
    }
    this.setState( {dice : num} );
  }

  render() {
    let buttonText = "Roll Dice"
    if(this.state.isRolling === true) {
      buttonText = "Rolling..."
    }
    return(
      <div className="DiceGame">
        <h1>Dice Game</h1>
        {/* Will refactor to use loops, setting static values ie. Die1 + Die 2, is not a good/useful practice */}
        <Die rollValue={this.state.dice[0]}/>
        <Die rollValue={this.state.dice[1]}/>
        <br/>
        <button className="DiceButton" onClick={this.rollDice}>{buttonText}</button>
      </div>
    )
  }
}
export default DiceGame;
