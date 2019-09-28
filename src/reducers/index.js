import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import genreReducer from './genreReducer';

const rootReducer = combineReducers({
  bookReducer,
  genreReducer
});

export default rootReducer;