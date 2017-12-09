import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IconPlusText from "./IconPlusText/IconPlusText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">


          <IconPlusText icon="address-card-o"/>
          <IconPlusText icon="map-marker"/>
          <IconPlusText icon="envelope-o"/>
          <IconPlusText icon="link" href="https://www.google.by" text="link"/>

        </div>
      </div>
    );
  }
}

export default App;
