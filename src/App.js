import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import BooksContainer from './containers/BooksContainer';
import BookForm from './containers/BookForm';
import { getGenres } from './actions/genres';
import Footer from './components/Footer'

class App extends Component {

  componentDidMount(){
    this.props.getGenres()
  }

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
          <Footer />
        </Router>
        
      </div>
    );
  }
}

export default connect(null, { getGenres })(App);
