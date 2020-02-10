import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import './App.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextVal: null,
      result: null,
      operation: null,
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(mark) {
    const { nextVal, result, operation } = this.state;
    this.setState(calculate({ nextVal, result, operation }, mark));
  }

  render() {
    const { nextVal, result } = this.state;
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Display result={nextVal || result || '0'} />
        <ButtonPanel clickButton={(mark) => this.buttonClick(mark)} />
      </div>
    );
  }
}


export default App;
