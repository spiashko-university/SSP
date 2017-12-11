import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Todo extends Component {
  render() {

    const onClick = this.props.onClick;
    const completed = this.props.completed;
    const text = this.props.text;

    return (
        <li
            onClick={onClick}
            style={ {
              textDecoration: completed ? 'line-through' : 'none'
            }}
        >
          {text}
        </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;