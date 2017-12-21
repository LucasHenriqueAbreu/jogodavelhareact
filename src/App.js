import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jogo da velha em react</h1>
        </header>
        <p className="App-intro">
          Vá para o diabo <code>src/App.js</code> satanás.
        </p>
      </div>
    );
  }
}

export default App;
