import React, {Component} from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import './App.css';
import UserInfo from './components/UserInfo/UserInfo';
import UserDetails from './components/UserDetails/UserDetails';
import {store} from './index'
import {loadData, loadingData} from './actions/actions';
import {connect} from 'react-redux';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadingData());

    fetch("https://api.github.com/users/gaearon")
    .then(data => data.json())
    .then(data => {
      store.dispatch(loadData(data));
    });
  }

  static prepareContacts(data){
    let email = "email is not visible";

    if (data.email != null) {
      email = data.email;
    }

    return {
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
  }

  static prepareDetails(data){
    return {
      general: data.bio,
      education: data.bio,
      contacts: data.bio
    };
  }

  render() {

    if (this.props.status === "empty") return null;
    if (this.props.status === "loading") {
      return (
          <div>loading...</div>
      );
    }

    console.log(this.props);

    const data = this.props.data;


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
                            contacts={App.prepareContacts(data)}/>
                </Col>
                <Col md={9} lg={9}>
                  <UserDetails details={App.prepareDetails(data)}/>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    data: state.loader.data,
    status: state.loader.status
  }
}

export default connect(mapStateToProps)(App);
