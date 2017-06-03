import { put, takeLatest, call, select } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import config from '../../config';
import * as actions from '../actions';
import * as selectors from '../selectors';
import * as utils from '../../utils';

export function* todosFetch() {
  let todos = yield select(selectors.todosGetItems);
  if (todos.length > 0) {
    return;
  }
  try {
    // const todos = yield call(fetchApi, '/to1dos');
    todos = yield call(utils.api, '/todos', 'GET');
    yield put(actions.todosFetchSuccess(todos));
  } catch (error) {
    yield put(actions.todosFetchFailure(error));
  }
}

export function* watchTodosFetch() {
  yield takeLatest(actions.TODOS_FETCH_REQUEST, todosFetch);
}

export function* todosAdd(action) {
  try {
    const todo = yield call(utils.api, '/todos', 'POST', {
      text: action.text,
      completed: false,
    });
    yield put(actions.todosAddSuccess(todo));
  } catch (err) {
    yield put(actions.todosAddFailure(err));
  }
}

export function* watchAddTodo() {
  yield takeLatest(actions.TODOS_ADD_REQUEST, todosAdd);
}

export function* todosToggle(action) {
  try {
    const todo = yield call(utils.api, `/todos/${action.id}`, 'PATCH', {
      completed: !action.completed,
    });
    console.log(todo);
    yield put(actions.todosToggleSuccess(todo));
  } catch (err) {
    yield put(actions.todosToggleFailure(err));
  }
}

export function* watchToggleTodo() {
  yield takeLatest(actions.TODOS_TOGGLE_REQUEST, todosToggle);
}
