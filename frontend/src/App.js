import React, { Component } from 'react';
import './App.css';
import Signin from './containers/signin'
import Welcome from './containers/welcome'
import { connect } from 'react-redux'
class App extends Component {
  render() {
    return (
      <div>
          {!this.props.authed ? <Signin/> : <Welcome/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {authed: state.base.isAuthed}
}
export default connect(mapStateToProps)(App);
