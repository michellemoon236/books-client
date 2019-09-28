import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGenres } from '../actions/genres';
import GenreButton from '../components/GenreButton'

class GenresContainer extends Component {

  componentDidMount(){
    this.props.getGenres()
  }

  render() {

    const genres = this.props.genres.map(genre => <GenreButton key={genre.id} genre={genre} /> )

    return (
      <div>
        {this.props.loading ? <h3>Loading...</h3> : genres }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("GENRE CONTAINER I am state", state)
  return {
    genres: state.genreReducer.genres
  }
}

export default connect(mapStateToProps, {getGenres} )(GenresContainer)
