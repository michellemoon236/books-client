import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGenres } from '../actions/genres';

class GenresContainer extends Component {

  componentDidMount(){
    this.props.getGenres()
  }

  render() {

    const genres = this.props.genres.map(genre => <button id={genre.id}>{genre.name}</button> )

    return (
      <div>
        { genres }
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
