import React, { Component } from 'react';

class Die extends Component {
  render() {
    let dieFace = "fas fa-dice-" + this.props.rollValue;

    return(
      <div className="Die">
        <i className={dieFace}></i>
      </div>
    )
  }
}
export default Die;
