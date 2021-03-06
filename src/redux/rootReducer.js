import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import searchReducer from './searchReducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart'],
// };

const rootReducer = combineReducers({
  search: searchReducer,
});

export default rootReducer;
