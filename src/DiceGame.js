import React, { Component } from 'react';
import Die from './Die'

class DiceGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Die1: "one",
      Die2: "two"
    }
  }

  getRand() {

  }

  render() {
    return(
      <div className="DiceGame">
        <h1>Dice Game</h1>
        {/* Will refactor to use loops, setting static values ie. Die1 + Die 2, is not a good/useful practice */}
        <Die rollValue={this.state.Die1}/>
        <Die rollValue={this.state.Die2}/>
        <br/>
        <button className="DiceButton">Roll Dice</button>
      </div>
    )
  }
}
export default DiceGame;
