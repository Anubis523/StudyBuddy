import React, { Component } from 'react';
import './App.css';
import Signin from './containers/signin'
import Welcome from './containers/welcome'
import { connect } from 'react-redux'
import { setUser } from './actions/items'
class App extends Component {
  componentDidMount(){
    if (!!localStorage.token){
      let user = JSON.parse(localStorage.getItem('user'))
      this.props.setUser(user)
    }
  }

  render() {
    const { token } = this.props    
    return (
      <div>
          {!token ? <Signin/> : <Welcome/>}
      </div>
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
