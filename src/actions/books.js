export const getBooks = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_BOOKS'})
    return fetch('/books')
    .then(resp => resp.json()) //turns resp into json
    .then(books => dispatch({type:'FETCH_BOOKS', payload: books}))
  }
}