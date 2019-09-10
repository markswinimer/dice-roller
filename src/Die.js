import React, { Component } from 'react';
import "./Die.css"

class Die extends Component {
  static defaultProps = {
    dieValues: [
      {number: 1, name: 'one'},
      {number: 2, name: 'two'},
      {number: 3, name: 'three'},
      {number: 4, name: 'four'},
      {number: 5, name: 'five'},
      {number: 6, name: 'six'}
    ]
  };

  render() {
    let final = 0;
    let i = 0;
    while(i < 6) {
      let dieValue = this.props.dieValues[i]
      if(dieValue.number === this.props.rollValue) {
        final = dieValue.name;
      }
      i++
    }

    let dieFace = "fas fa-dice-" + final;
    console.log(dieFace)
    dieFace += " " + (this.props.shaking ? 'Shaking' : '')
    console.log(dieFace)
    return(
      <div className="Die">
        <i className={dieFace}></i>
      </div>
    )
  }
}
export default Die;
