import React, {Component} from 'react';
import './Icon.css';

class Icon extends Component {
  render() {
    const icon = this.props.icon;
    const fullClassName = 'fa fa-' + icon + ' Icon';
    return (
        <i className={fullClassName}/>
    );
  }
}

export default Icon;

