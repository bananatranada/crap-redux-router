export const getTodosResult = state => state.todos.result;
export const getTodosEntities = state => state.todos.entities;
export const getTodosIsFetching = state => state.todos.isFetching;
export const getTodosFetchError = state => state.todos.fetchError;
export const getTodo = (state, props) =>
  state.todos.entities.todos[props.todoId];
