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
    default: 
      return state
  }
}

