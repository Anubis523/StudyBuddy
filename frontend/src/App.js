import React, { Component } from 'react';
import './App.css';
import Signin from './containers/signin'
import Welcome from './containers/welcome'
import { connect } from 'react-redux'
import { setUser } from './actions/items'
import { Container, Menu, Segment, Grid, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './css/segment-ui.css'

class App extends Component {

  render() {
    const { token } = this.props    
    return (
      <>
          { token === '' ?  <Signin/> : <Welcome/> }
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
}

const mapStateToProps = state => {
  return {
    token: state.base.token
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
