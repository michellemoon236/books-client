import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import BooksContainer from './containers/BooksContainer';
import BookForm from './containers/BookForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/books' component={BooksContainer} />
              <Route exact path='/books/new' component={BookForm} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
