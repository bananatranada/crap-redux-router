import { put, call, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions';
import * as todosSagas from './todos';

export function* initPageHome() {
  yield put(actions.pageSetIsLoaded(false));
  yield call(todosSagas.todosFetch);
  yield put(actions.pageSetIsLoaded(true));
}

export function* watchInitPageHome() {
  yield takeLatest(actions.PAGE_INIT_HOME, initPageHome);
}
