import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import GenresContainer from './containers/GenresContainer';
import BooksContainer from './containers/BooksContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
        </Router>
        <GenresContainer />
        <BooksContainer />
      </div>
    );
  }
}

export default connect()(App);
