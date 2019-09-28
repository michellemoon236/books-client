import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks } from '../actions/books';
import GenresContainer from './GenresContainer'

class BooksContainer extends Component {

  componentDidMount(){
    this.props.getBooks()
  }

  render() {

    const books = this.props.books.map(book => <p>{book.title}</p> )

    return (
      <div>
        <br/>
        <h1>Book List</h1>
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