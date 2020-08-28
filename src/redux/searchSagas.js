import { takeEvery, put, call } from 'redux-saga/effects';

import searchActions from './searchActions';
import api from '../utils/searchAPI';

export function* searchMusicSaga({ searchQuery }) {
  try {
    //Call the search API here
    const searchResponse = yield call(api, searchQuery);

    if (!searchResponse.ok) {
      throw searchResponse;
    }
    yield put(
      searchActions.Creators.searchSuccess(searchResponse.data.results)
    );
  } catch (error) {
    console.log(error);
    yield put(searchActions.Creators.searchFail(error));
  }
}

export function* onSearchMusicStart() {
  yield takeEvery(searchActions.Types.SEARCH_START, searchMusicSaga);
}
