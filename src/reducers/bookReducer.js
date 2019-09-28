export default (state = {books: []}, action ) => {
  switch(action.type) {
    case 'LOADING_BOOKS':
    return {
      // take all the state as it is, except just change this one thing, change loading to true, we use the state spreading which is ...state 
      // this lets the user know something has happened, we are loading
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