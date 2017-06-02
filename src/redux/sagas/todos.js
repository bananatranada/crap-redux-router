import { put, takeEvery, takeLatest, call } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import config from '../../config';
import * as actions from '../actions';

// normalize? https://github.com/reactjs/redux/blob/master/examples/real-world/src/middleware/api.js
function fetchApi(url, verb) {
  return fetch(`${config.proxy}${url}`).then(res => res.json());
  // .then(json => json.data.children.map(child => child.data));
}

export function* todosFetch() {
  try {
    const todos = yield call(fetchApi, '/todos');
    yield put(actions.todosFetchSucceeded(todos));
  } catch (err) {
    yield put(actions.todosFetchFailed(err));
  }
}

export function* watchTodosFetch() {
  yield takeLatest(actions.TODOS_FETCH_REQUESTED, todosFetch);
}

function todosAddApi(todo) {
  return fetch('http://localhost:3001/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  }).then(res => res.json());
}

export function* todosAdd(action) {
  try {
    const todo = yield call(todosAddApi, {
      text: action.text,
      completed: false,
    });
    yield put(actions.todosAddSucceeded(todo));
  } catch (err) {
    yield put(actions.todosAddFailed(err));
  }
}

export function* watchAddTodo() {
  yield takeLatest(actions.TODOS_ADD_REQUESTED, todosAdd);
}

export function* todosEdit(todo) {}

export function* watchEditTodo() {
  yield takeLatest(actions.TODOS_EDIT_REQUESTED, todosEdit);
}
