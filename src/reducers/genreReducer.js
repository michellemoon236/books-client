export default (state = {genres: []}, action ) => {
  switch(action.type) {
    case 'LOADING_GENRES':
    return {
      ...state, 
      loading: true
    }
  case 'FETCH_GENRES':
    return {
      ...state,
      genres: action.payload, 
      loading: false
    }
  default: 
    return state
  }
}