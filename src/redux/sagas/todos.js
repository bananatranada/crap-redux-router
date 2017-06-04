import { put, takeLatest, call, select } from 'redux-saga/effects';

import * as actions from '../actions';
import * as selectors from '../selectors';
import * as utils from '../../utils';
import * as schemas from '../schemas';

export function* todosFetch() {
  const currentTodos = yield select(selectors.todosGetResult);
  if (currentTodos.length > 0) {
    return;
  }
  try {
    const todos = yield call(utils.api, '/todos', 'GET');
    yield put(actions.todosFetchSuccess(schemas.normalizeTodos(todos)));
  } catch (error) {
    yield put(actions.todosFetchFailure(error));
  }
}

export function* watchTodosFetch() {
  yield takeLatest(actions.TODOS_FETCH_REQUEST, todosFetch);
}

export function* todosAdd(action) {
  const currentTodos = yield select(selectors.todosGetResult);

  try {
    let todo;
    do {
      todo = yield call(utils.api, '/todos', 'POST', {
        text: action.text,
        completed: false,
      });
    } while (!todo || currentTodos.includes(todo.id)); // if u get same id's, retry
    yield put(actions.todosAddSuccess(todo));
  } catch (err) {
    yield put(actions.todosAddFailure(err));
  }
}

export function* watchTodosAdd() {
  yield takeLatest(actions.TODOS_ADD_REQUEST, todosAdd);
}

export function* todosToggle(action) {
  try {
    const todo = yield call(utils.api, `/todos/${action.id}`, 'PATCH', {
      completed: action.completed,
    });
    yield put(actions.todosToggleSuccess(todo));
  } catch (err) {
    yield put(actions.todosToggleFailure(err));
  }
}

export function* watchTodosToggle() {
  yield takeLatest(actions.TODOS_TOGGLE_REQUEST, todosToggle);
}
