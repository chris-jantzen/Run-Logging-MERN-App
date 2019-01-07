import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  testButtonHandler(e) {
    e.preventDefault();
    alert('Test Button pressed')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
