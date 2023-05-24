import { combineReducers } from 'redux';

import searchReducer from '../reducer/searchReducer';

const rootReducer = combineReducers({
  tickets: searchReducer,
});

export default rootReducer;
