export const TODOS_ADD_TODO = 'TODOS_ADD_TODO';
export const TODOS_TOGGLE_TODO = 'TODOS_TOGGLE_TODO';
export const TODOS_FETCH_TODOS_START = 'TODOS_FETCH_TODOS_START';
export const TODOS_FETCH_TODOS_SUCCESS = 'TODOS_FETCH_TODOS_SUCCESS';
export const TODOS_FETCH_TODOS_FAILURE = 'TODOS_FETCH_TODOS_FAILURE';

let nextTodoId = 0;

export const addTodo = text => ({
  type: TODOS_ADD_TODO,
  id: nextTodoId++,
  text,
});

export const toggleTodo = id => ({
  type: TODOS_TOGGLE_TODO,
  id,
});

export const fetchTodos = () => ({
  type: TODOS_FETCH_TODOS_START,
});

export const fetchTodosSuccess = todos => ({
  type: TODOS_FETCH_TODOS_SUCCESS,
  todos,
});

export const fetchTodosFailure = error => ({
  type: TODOS_FETCH_TODOS_FAILURE,
  error,
});
