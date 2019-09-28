export default (state = {books: []}, action ) => {
  switch(action.type) {
    case 'LOADING_BOOKS':
      return {
      ...state, 
      loading: true
      }
    case 'FETCH_BOOKS':
      return {
        ...state,
        books: action.payload, 
        loading: false
      }
    case 'DELETE_BOOK':
      console.log("Book selected to delete")
      return {
        ...state,
        loading: true
      }
    case 'BOOK_DELETED':
      console.log("Book has been deleted")
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.id),
        loading: false
      }
    case 'ADD_BOOK':
      console.log("Book selected to add")
      return {
        ...state, 
        loading: true
      }
    case 'BOOK_ADDED':
      console.log("Book has been added")
      return {
        ...state,
        books: [...state.books, action.payload],
        loading: false
      }
    default: 
      return state
  }
}

