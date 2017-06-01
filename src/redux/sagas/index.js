import _ from 'lodash';
import { all } from 'redux-saga/effects';
import * as pages from './page';
import * as todos from './todos';
// import * as users from './users';
// import * as dashboard from './dashboard';

export default function* rootSaga() {
  yield all(
    _.values({
      ...pages,
      ...todos,
    }).map(saga => saga())
  );
}
