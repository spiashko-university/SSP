import React, {Component} from 'react';
import './LinkText.css';

class LinkText extends Component {
  render() {
    const text = this.props.text;
    const href = this.props.href;
    return (
        <a className="LinkText" href={href}>{text}</a>
    );
  }
}

export default LinkText;

