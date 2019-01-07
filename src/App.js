import React, { Component } from 'react';
import MainPage from './Components/MainPage'
import Navbar from './Components/Navbar'

import './App.css';

class App extends Component {
  testButtonHandler(e) {
    e.preventDefault();
    alert('Test Button pressed')
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <MainPage />
      </div>
    );
  }
}

export default App;
