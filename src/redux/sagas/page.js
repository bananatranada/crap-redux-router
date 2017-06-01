import { put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions';

function* initPageHome() {
  yield put(actions.setPageLoaded(false));
  // try {
  //   // fetch all things for home page
  //
  // } catch {
  //     // catch errors
  // }

  yield put(actions.setPageLoaded(true));
}

export function* watchFetchTodos() {
  yield takeLatest(actions.PAGE_INIT_PAGE_HOME, initPageHome);
}
