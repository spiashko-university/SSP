import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddTodo from './components/mixed/AddTodo';
import VisibleTodoList from './components/containers/VisibleTodoList';
import Footer from './components/presentationals/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
