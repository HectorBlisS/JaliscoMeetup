import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import RaisedButton from 'material-ui/RaisedButton';

import Rutas from './Rutas';
import Navbar from './components/Navbar/Navbar';




class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <RaisedButton label="Primary" primary={true} />

          <Navbar />
          <Rutas />

      </div>
    );
  }
}

export default App;
