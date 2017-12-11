import React, {Component} from 'react';
import store from '../store/store';

class List extends Component {
  constructor(){
    super();
    console.log("kek");
    store.subscribe(() => this.forceUpdate());
  }

  render() {

    this.items = store.getState().items;

    return (
        <ul>
          {
            this.items.map((item, index) => (
                <li key={index}>{item.text}</li>
            ))
          }
        </ul>
    );
  }
}

export default List;