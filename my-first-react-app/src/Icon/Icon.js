import React, { Component } from 'react';
import './Icon.css';

class Icon extends Component {
  render() {
    const icon = this.props.icon
    const fullName = "fa fa-" + icon;
    return (
      <div className="Icon">
        <i className={fullName}></i>
      </div>
    );
  }
}

export default Icon;

