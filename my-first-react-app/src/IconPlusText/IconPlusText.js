import React, {Component} from 'react';
import './IconPlusText.css';
import Icon from '../Icon/Icon';

class IconPlusText extends Component {
  render() {
    const icon = this.props.icon;
    const text = this.props.text;
    const href = this.props.href;
    return (
        <div className="IconPlusText">
          <Icon icon={icon}/>
          <a className="IconPlusText" href={href}>{text}</a>
        </div>
    );
  }
}

export default IconPlusText;

