import React, {Component, Fragment} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dicesToThrow: 7,
        dicesValor: [1, 2, 3, 'archer', 'rider', 'shogun'],
        dicesTotal: []
    }
    this.newRoll = this.newRoll.bind(this)
    this.endTurn = this.endTurn.bind(this)
}

  roll() {
    return this.dicesValor[Math.floor(Math.random() * this.dicesValor.length)]
  }

  newRoll() {
    const newTotal = [];
    for (let i = 0; i < this.dicesToThrow; i++) {
      this.dicesTotal.push(this.newRoll);
    }
    this.setState({dicesTotal: newTotal});
  }

  endTurn() {
    this.setState({dicesToThrow: 7});
  }

  render() {
    return (
      <Fragment>
        <h1 className="title">Age of War</h1>
        <h2 className="dicesValor">Dices valor: 1 Sword, 2 Swords, 3 Swords, Archer, Rider, Shogun</h2>
        <h2 className="dicesToThrow">Dices to throw: {this.state.dicesToThrow}</h2>
        <h3 className="actualDicesValor">Actual roll: {this.dicesTotal}</h3>
        <button className="newRoll" onClick={this.newRoll}>New Roll</button>
        <button className="endTurn" onClick={this.endTurn}>End Turn</button>
      </Fragment>
    );
  }
}

export default App;