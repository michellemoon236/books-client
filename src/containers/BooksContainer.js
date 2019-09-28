import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks } from '../actions/books';
import GenresContainer from './GenresContainer'

class BooksContainer extends Component {

  componentDidMount(){
    this.props.getBooks()
  }

  render() {

    const books = this.props.books.map(book => <button id={book.id}>{book.name}</button> )

    return (
      <div>
        <GenresContainer />
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

export default connect(mapStateToProps, {getBooks} )(BooksContainer)