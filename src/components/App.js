import React from 'react';
import { ButtonPanel } from './ButtonPanel';
import Display from './Display';
import './App.css';

export const App = () => (
  <div className="App">
    <h1>Calculator</h1>
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
