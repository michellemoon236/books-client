export const getGenres = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_GENRES'})
    return fetch('/genres')
    .then(resp => resp.json()) //turns resp into json
    .then(genres => dispatch({type:'FETCH_GENRES', payload: genres}))
  }
}