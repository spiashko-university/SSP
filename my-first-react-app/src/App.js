import React, {Component} from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import './App.css';
import data from './data/data.json';
import UserInfo from './UserInfo/UserInfo';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
          </header>
          <div className="App-body">
            <Grid>
              <Row>
                <Col md={3} lg={3}>
                  <UserInfo photo={data.photo}
                            fullName={data.fullName}
                            username={data.username}
                            briefDescription={data.briefDescription}
                            contacts={data.contacts}/>
                </Col>
                <Col md={9} lg={9}>
                   sdsadgasdsadgasdsadgasdsadgasdsadgasdsadga  sdsadgasdsadgasdsadgasdsadgasdsadgasdsadga sdsadgasdsadgasdsadgasdsadgasdsadgasdsadga sdsadgasdsadgasdsadgasdsadgasdsadgasdsadga sdsadgasdsadgasdsadgasdsadgasdsadgasdsadga
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
    );
  }
}

export default App;
