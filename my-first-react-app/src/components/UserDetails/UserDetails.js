import React, {Component} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './UserDetails.css';
import EditArea from '../EditArea/EditArea'
import {
  GENERAL_FRAME,
  EDUCATION_FRAME,
  CONTACTS_FRAME
} from '../../constants'

class UserDetails extends Component {
  render() {
    const general = this.props.details.general;
    const education = this.props.details.education;
    const contacts = this.props.details.contacts;
    return (
        <Tabs defaultActiveKey={1} id="userDetails">
          <Tab eventKey={1} title="General">
            <EditArea id={GENERAL_FRAME} text={general}/>
          </Tab>
          <Tab eventKey={2} title="Education">
            <EditArea id={EDUCATION_FRAME} text={education}/>
          </Tab>
          <Tab eventKey={3} title="Contacts">
            <EditArea id={CONTACTS_FRAME} text={contacts}/>
          </Tab>
        </Tabs>
    );
  }
}

export default UserDetails;

