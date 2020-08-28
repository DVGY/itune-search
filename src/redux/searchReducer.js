import { createReducer } from 'reduxsauce';
import Actions from './searchActions';

const INITIAL_STATE = {
  searchQuery: null,
  searchResult: null,
  loading: false,
  error: null,
};

//Individual piece of new state upon action
export const searchStart = (state = INITIAL_STATE, action) => ({
  ...state,
  searchQuery: action.searchQuery,
  loading: true,
  error: null,
  searchResult: null,
});
export const searchSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  searchResult: action.searchResult,
  searchQuery: null,
  loading: false,
  error: null,
});
export const searchFail = (state = INITIAL_STATE, action) => ({
  ...state,
  searchQuery: null,
  searchResult: null,
  loading: false,
  error: action.error,
});

const Types = Actions.Types;

export const HANDLERS = {
  [Types.SEARCH_START]: searchStart,
  [Types.SEARCH_SUCCESS]: searchSuccess,
  [Types.SEARCH_FAIL]: searchFail,
};

export default createReducer(INITIAL_STATE, HANDLERS);
