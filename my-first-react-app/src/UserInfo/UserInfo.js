import React, {Component} from 'react';
import './UserInfo.css';
import IconPlusText from '../IconPlusText/IconPlusText';

class UserInfo extends Component {
  render() {
    const photo = this.props.photo;
    const fullName = this.props.fullName;
    const username = this.props.username;
    const briefDescription = this.props.briefDescription;
    const contacts = this.props.contacts;

    const social = contacts.social;
    const location = contacts.location;
    const email = contacts.email;
    const personalLink = contacts.personalLink;

    return (
        <div className="UserInfo">
          <img src={photo} alt={photo}/>
          <p className="UserInfo-fullName">{fullName}</p>
          <p className="UserInfo-username">{username}</p>
          <p className="UserInfo-briefDescription">{briefDescription}</p>
          <IconPlusText icon="address-card-o"
                        href={social.href}
                        text={social.text}/>
          <IconPlusText icon="map-marker"
                        href={location.href}
                        text={location.text}/>
          <IconPlusText icon="envelope-o"
                        href={email.href}
                        text={email.text}/>
          <IconPlusText icon="link"
                        href={personalLink.href}
                        text={personalLink.text}/>
        </div>
    );
  }
}

export default UserInfo;

