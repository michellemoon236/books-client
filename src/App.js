import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import GenresContainer from './containers/GenresContainer';
import BooksContainer from './containers/BooksContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello World</p>
        <GenresContainer />
        <BooksContainer />
      </div>
    );
  }
}

export default connect()(App);
