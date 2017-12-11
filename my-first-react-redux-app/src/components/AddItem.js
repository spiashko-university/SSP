import React, {Component} from 'react'
import { addItem } from '../actions/actions'
import store from '../store/store'

class AddItem extends Component {
  render() {
    let input;
    console.log(this.props.dispatch);
    console.log(this.props);
    return (
        <div>
          <form
              onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                  return
                }
                store.dispatch(addItem(input.value));
                input.value = ''
              }}
          >
            <input
                ref={node => {
                  input = node
                }}
            />
            <button type="submit">
              Add Item
            </button>
          </form>
        </div>
    )
  }
}

export default AddItem