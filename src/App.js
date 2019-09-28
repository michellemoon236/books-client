import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import GenresContainer from './containers/GenresContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello World</p>
        <GenresContainer />
      </div>
    );
  }
}

export default connect()(App);
