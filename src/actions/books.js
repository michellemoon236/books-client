export const getBooks = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_BOOKS'})
    return fetch('/books')
    .then(resp => resp.json()) //turns resp into json
    .then(books => dispatch({type:'FETCH_BOOKS', payload: books}))
  }
}


export const deleteBook = (id) => {
  return (dispatch) => {
    dispatch({type: 'DELETE_BOOK'}, id)
    return fetch(`/books/${id}`, {
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(dispatch({type:'BOOK_DELETED', id}))
  }
}