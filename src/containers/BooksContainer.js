import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks } from '../actions/books';
import { deleteBook } from '../actions/books';
import GenresContainer from './GenresContainer'
import BookCard from '../components/BookCard'

class BooksContainer extends Component {

  componentDidMount(){
    this.props.getBooks()
  }

  handleOnClick = (event) => {
    console.log("I have been clicked", event.target)
    this.setState({
      // genreFilter: parseInt(event.target.id)
      genreFilter: event.target.id
    })
  }

  render() {

    const books = this.props.books.map(book => <BookCard key={book.id} book={book} delete={this.props.deleteBook} /> )

    return (
      <div>
        <br/>
        <h1>Book List</h1>
        <GenresContainer handleClick={this.handleOnClick} />
        {console.log("books", books)}
        {this.props.loading ? <h3>Loading...</h3> : books }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.bookReducer.books
  }
}

export default connect(mapStateToProps, { getBooks, deleteBook } )(BooksContainer)