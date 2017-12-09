import React, {Component} from 'react';
import './UserInfo.css';
import IconPlusText from "../IconPlusText/IconPlusText";

class UserInfo extends Component {
  render() {
    const photo = this.props.photo;
    const fullname = this.props.fullname;
    const username = this.props.username;
    const briefDescription = this.props.briefDescription;
    const contacts = this.props.contacts;

    return (
      <div>
        <IconPlusText icon="address-card-o"/>
        <IconPlusText icon="map-marker"/>
        <IconPlusText icon="envelope-o"/>
        <IconPlusText icon="link" href="https://www.google.by" text="link"/>
      </div>
    );
  }
}

export default UserInfo;

