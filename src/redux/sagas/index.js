// don't yield to put(action) to watchers; call the generator functions directly
import _ from 'lodash';
import { all, fork } from 'redux-saga/effects';
import * as page from './page';
import * as todos from './todos';

export default function* rootSaga() {
  yield all(
    _.values({
      ...page,
      ...todos,
    })
      .filter(saga => saga.name.startsWith('watch'))
      .map(saga => fork(saga))
  );
}
