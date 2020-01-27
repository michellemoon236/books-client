import React, { Component } from 'react'
import { connect } from 'react-redux'
import AllButton from '../components/AllButton'
import GenreButton from '../components/GenreButton'

class GenresContainer extends Component {

  render(){

    const genres = this.props.genres.map(genre => <GenreButton key={genre.id} genre={genre} handleThisClick={this.props.handleClick} /> )

    return (
      <div>
        <h3>Select genre to filter books</h3>
        <AllButton handleThisClick={this.props.handleClick} />
        {this.props.loading ? <h3>Loading...</h3> : genres }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    genres: state.genreReducer.genres,
    loading: state.genreReducer.loading
  }
}

export default connect(mapStateToProps)(GenresContainer)
