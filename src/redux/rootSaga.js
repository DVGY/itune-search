import { all, call } from 'redux-saga/effects';
import { onSearchMusicStart } from './searchSagas';

export default function* rootSaga() {
  //Call any number of saga and initialize.run them concurrently
  yield all([call(onSearchMusicStart)]);
}
