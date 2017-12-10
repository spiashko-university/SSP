import React, {Component} from 'react';
import './IconDescription.css';

class IconDescription extends Component {
  render() {
    const text = this.props.text;
    const href = this.props.href;
    if(href)
    {
      return (
          <a className="IconDescription" href={href}>{text}</a>
      );
    }
    else{
      return text;
    }

  }
}

export default IconDescription;

