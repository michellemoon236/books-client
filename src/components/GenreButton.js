import React from 'react'

const GenreButton = props => (<button id={props.genre.id} onClick={props.handleThisClick}>{props.genre.name}</button>)

export default GenreButton