import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Display/>
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
