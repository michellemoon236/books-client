import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions/books';
import { deleteBook } from '../actions/books';
import BookCard from '../components/BookCard';
import GenresContainer from './GenresContainer';

class BooksContainer extends Component {

  state = {
    genreFilter: "all"
  }

  componentDidMount(){
    if (this.props.books.length === 0) {
      this.props.getBooks()
    }
  }

  handleOnClick = (event) => {
    console.log("I have been clicked", event.target)
    this.setState({
      genreFilter: event.target.id
    })
  }

  filteredBooks = (books) => {
    if (this.state.genreFilter === "all") {
      return books
    } else {
      return books.filter(book => this.state.genreFilter === book.genre_id.toString())
    }
  }

  render(){

    const books = this.filteredBooks(this.props.books).map(book => <BookCard key={book.id} book={book} delete={this.props.deleteBook} /> )

    return (
      <div>
        <br/>
        <h1>Book List</h1>
        <GenresContainer handleClick={this.handleOnClick} />
        <br/>
        <div class="flex-container">
          {console.log("books", books)}
          {this.props.loading ? <h3>Loading...</h3> : books }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.bookReducer.books,
    loading: state.bookReducer.loading
  }
}

export default connect(mapStateToProps, { getBooks, deleteBook } )(BooksContainer)