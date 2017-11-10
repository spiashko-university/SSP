import React, { Component } from 'react';
import './IconPlusText.css';

class IconPlusText extends Component {
  render() {
    const icon = this.props.icon
    const fullIconName = "fa fa-" + icon;
    const text = this.props.text
    return (
      <div className="IconPlusText">
        <i className={fullIconName}></i>
      </div>
    );
  }
}

export default Icon;

