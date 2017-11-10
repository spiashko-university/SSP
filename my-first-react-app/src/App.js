import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './Icon/Icon.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">


          <Icon icon="address-card-o"/>
          <Icon icon="map-marker"/>
          <Icon icon="envelope-o"/>
          <Icon icon="link"/>

        </div>
      </div>
    );
  }
}

export default App;
