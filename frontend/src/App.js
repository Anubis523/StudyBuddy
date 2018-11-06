import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Signin from './components/signin'

class App extends Component {
  render() {
    return (
      <div>
        <Signin/>
      </div>
    );
  }
}

export default App;
