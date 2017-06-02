export const TODOS_ADD = 'TODOS_ADD';
export const TODOS_TOGGLE = 'TODOS_TOGGLE';
export const TODOS_FETCH_REQUESTED = 'TODOS_FETCH_REQUESTED';
export const TODOS_FETCH_SUCCEEDED = 'TODOS_FETCH_SUCCEEDED';
export const TODOS_FETCH_FAILED = 'TODOS_FETCH_FAILED';
export const TODOS_ADD_REQUESTED = 'TODOS_ADD_REQUESTED';
export const TODOS_ADD_SUCCEEDED = 'TODOS_ADD_SUCCEEDED';
export const TODOS_ADD_FAILED = 'TODOS_ADD_FAILED';
export const TODOS_EDIT_REQUESTED = 'TODOS_EDIT_REQUESTED';
export const TODOS_EDIT_SUCCEEDED = 'TODOS_EDIT_SUCCEEDED';
export const TODOS_EDIT_FAILED = 'TODOS_EDIT_FAILED';

let nextTodoId = 0;

export const todosAdd = text => ({
  type: TODOS_ADD,
  id: nextTodoId++,
  text,
});

export const todosToggle = id => ({
  type: TODOS_TOGGLE,
  id,
});

export const todosFetchRequested = () => ({
  type: TODOS_FETCH_REQUESTED,
});

export const todosFetchSucceeded = todos => ({
  type: TODOS_FETCH_SUCCEEDED,
  todos,
});

export const todosFetchFailed = error => ({
  type: TODOS_FETCH_FAILED,
  error,
});

export const todosAddRequested = text => ({
  type: TODOS_ADD_REQUESTED,
  id: nextTodoId++,
  text,
});

export const todosAddSucceeded = todo => ({
  type: TODOS_ADD_SUCCEEDED,
  todo,
});

export const todosAddFailed = error => ({
  type: TODOS_ADD_FAILED,
  error,
});

export const todosEditRequested = () => ({
  type: TODOS_EDIT_REQUESTED,
});

export const todosEditSucceeded = todos => ({
  type: TODOS_EDIT_SUCCEEDED,
  todos,
});

export const todosEditFailed = error => ({
  type: TODOS_EDIT_FAILED,
  error,
});
