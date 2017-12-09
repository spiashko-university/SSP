import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/data.json';
import UserInfo from './UserInfo/UserInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">

          <UserInfo photo={data.photo}
                    fullName={data.fullName}
                    username={data.username}
                    briefDescription={data.briefDescription}
                    contacts={data.contacts}/>

        </div>
      </div>
    );
  }
}

export default App;
