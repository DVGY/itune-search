import Actions from './searchActions';

import { searchStart, searchSuccess, searchFail } from './searchReducer';

describe('searchMusics', () => {
  const initialStateSearch = {
    searchQuery: null,
    searchResult: null,
    loading: false,
    error: null,
  };

  it('should return test SEARCH_START Action', () => {
    expect(
      searchStart(initialStateSearch, {
        type: Actions.Types.SEARCH_START,
        searchQuery: 'Michael Jackson',
      })
    ).toEqual({
      searchQuery: 'Michael Jackson',
      searchResult: null,
      loading: true,
      error: null,
    });
  });
  it('should return test SEARCH_SUCCESS Action', () => {
    expect(
      searchSuccess(initialStateSearch, {
        type: Actions.Types.SEARCH_SUCCESS,
        searchResult: [],
      })
    ).toEqual({
      searchQuery: null,
      searchResult: [],
      loading: false,
      error: null,
    });
  });
  it('should return test SEARCH_FAIL Action', () => {
    expect(
      searchFail(initialStateSearch, {
        type: Actions.Types.SEARCH_FAIL,
        error: 'Returned 404',
      })
    ).toEqual({
      searchResult: null,
      searchQuery: null,
      loading: false,
      error: 'Returned 404',
    });
  });
});
