import React, {Component} from 'react';
import './IconPlusDescription.css';
import Icon from '../Icon/Icon';
import IconDescription from '../IconDescription/IconDescription';

class IconPlusDescription extends Component {
  render() {
    const icon = this.props.icon;
    const text = this.props.text;
    const href = this.props.href;

    return (
        <div className="IconPlusDescription">
          <Icon icon={icon}/>
          <IconDescription href={href} text={text}/>
        </div>
    );
  }
}

export default IconPlusDescription;

