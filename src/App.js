import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import BooksContainer from './containers/BooksContainer';
import BookForm from './containers/BookForm';
import Footer from './components/Footer'
import { getBooks } from './actions/books';
import { getGenres } from './actions/genres';

class App extends Component {

  componentDidMount(){
    if (this.props.books.length === 0) {
      this.props.getBooks()
    }
    if (this.props.genres.length === 0) {
      this.props.getGenres()
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Router>
          <Navigation />
          <div className="App">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/books' component={BooksContainer} />
              <Route exact path='/books/new' component={BookForm} />
            </Switch>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.bookReducer.books,
    genres: state.genreReducer.genres
  }
}

export default connect(mapStateToProps, { getBooks, getGenres })(App);
