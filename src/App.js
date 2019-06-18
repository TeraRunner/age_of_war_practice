import React, {Component, Fragment} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        cubilete: 0,
        dicesValor: ['1 sword', '2 swords', '3 swords', 'archer', 'mounted', 'shogun']
    }
}

  render() {
    return (
      <Fragment>
        <h1 className="title">Age of War</h1>
        <h2>Dices valor: {this.props.dicesValor}</h2>
        <h2>Dices to throw: {this.props.cubilete}</h2>
      </Fragment>
    );
  }
}

export default App;