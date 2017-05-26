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


          <Navbar />
          <Rutas />

      </div>
    );
  }
}

export default App;
