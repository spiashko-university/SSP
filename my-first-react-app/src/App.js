import React, {Component} from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import './App.css';
import UserInfo from './UserInfo/UserInfo';
import UserDetails from './UserDetails/UserDetails';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoaded: false
    }
  }

  componentDidMount() {
    let _this = this;

    fetch("https://api.github.com/users/gaearon")
    .then(data => data.json())
    .then(data => {
      _this.setState({
        data: data,
        isLoaded: true
      })
    });
  }

  render() {

    if (this.state.isLoaded === false) return null;

    let email = "email is not visible";

    if (this.state.data.email != null) {
      email = this.state.data.email;
    }

    const data = this.state.data;

    console.log(this.state.data);

    const contacts = {
      social:{
        href: data.blog,
        text: data.blog
      },
      location:{
        text:data.location
      },
      email:{
        text:email
      },
      personalLink:{
        href: data.html_url,
        text: data.html_url
      }
    };

    const details = {
      general: data.bio,
      education: data.bio,
      contacts: data.bio
    };

    return (
        <div className="App">
          <header className="App-header">
          </header>
          <div className="App-body">
            <Grid>
              <Row>
                <Col md={3} lg={3}>
                  <UserInfo photo={data.avatar_url}
                            fullName={data.name}
                            username={data.login}
                            briefDescription={data.bio}
                            contacts={contacts}/>
                </Col>
                <Col md={9} lg={9}>
                  <UserDetails details={details}/>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
    );
  }
}

export default App;
