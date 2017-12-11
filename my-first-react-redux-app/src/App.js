import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions/actions'
import store from './store/store'

class App extends Component {
  render() {


// Log the initial state
    console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
    const unsubscribe = store.subscribe(() =>
        console.log(store.getState())
    )

// Dispatch some actions
    store.dispatch(addTodo('Learn about actions'))
    store.dispatch(addTodo('Learn about reducers'))
    store.dispatch(addTodo('Learn about store'))
    store.dispatch(toggleTodo(0))
    store.dispatch(toggleTodo(1))
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
    unsubscribe()


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
