import React, { Component } from 'react';
import './IconPlusText.css';
import Icon from "../Icon/Icon";
import LinkText from "../LinkText/LinkText";

class IconPlusText extends Component {
  render() {
    const icon = this.props.icon;
    const text = this.props.text;
    const href = this.props.href;
    return (
      <div className="IconPlusText">
          <Icon icon={icon}/>
          <LinkText href={href} text={text}/>
      </div>
    );
  }
}

export default IconPlusText;

