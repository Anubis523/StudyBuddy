import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/login'

class App extends Component {
  render() {
    return (
      <div>
        <Login/>
        App
      </div>
    );
  }
}

export default App;
