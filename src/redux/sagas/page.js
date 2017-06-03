import { put, call, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions';
import * as todosSagas from './todos';

export function* pageInitHome() {
  yield put(actions.pageSetIsLoaded(false));
  yield call(todosSagas.todosFetch);
  yield put(actions.pageSetIsLoaded(true));
}

export function* watchPageInitHome() {
  yield takeLatest(actions.PAGE_INIT_HOME, pageInitHome);
}
