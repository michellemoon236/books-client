import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addBook } from '../actions/books';

class BookForm extends Component {
  state = {
    title: '',
    author: '',
    genre_id: '',
    image: '',
    loading: false
  }

  handleOnChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const book = {...this.state}
    this.props.addBook(book)
    this.setState({
      title: '',
      author: '',
      genre_id: '',
      image: '',
      loading: false
    })
  }

  render() {
    return (
      <div>
        <br/>
        <h1>Add New Book</h1>
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <input 
              type="text"
              id="title"
              value={this.state.title}
              placeholder="book title"
              onChange={this.handleOnChange}
            />
          </p>
          <p>
            <input 
              type="text"
              id="author"
              value={this.state.author}
              placeholder="author"
              onChange={this.handleOnChange}
            />
          </p>
          <p>
            <input 
              type="text"
              id="image"
              value={this.state.image}
              placeholder="image url"
              onChange={this.handleOnChange}
            />
          </p>
          <p>
            <select id="genre_id" size="1" onChange={this.handleOnChange}>
              <option value="" disabled selected>select genre</option>
              <option value={this.props.genres[0].id}>{this.props.genres[0].name}</option>
              <option value={this.props.genres[1].id}>{this.props.genres[1].name}</option>
              <option value={this.props.genres[2].id}>{this.props.genres[2].name}</option>
              <option value={this.props.genres[3].id}>{this.props.genres[3].name}</option>
              <option value={this.props.genres[4].id}>{this.props.genres[4].name}</option>
              <option value={this.props.genres[5].id}>{this.props.genres[5].name}</option>
              <option value={this.props.genres[6].id}>{this.props.genres[6].name}</option>
              <option value={this.props.genres[7].id}>{this.props.genres[7].name}</option>
              <option value={this.props.genres[8].id}>{this.props.genres[8].name}</option>
            </select>
          </p>
          <button type="submit">Add Book</button>
        </form>       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("FORM", state)
  return {
    genres: state.genreReducer.genres
  }
}

export default connect(mapStateToProps, { addBook })(BookForm)