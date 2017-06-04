export const todosGetResult = state => state.todos.result;
export const todosGetEntities = state => state.todos.entities;
export const todosGetIsFetching = state => state.todos.isFetching;
export const todosGetFetchError = state => state.todos.fetchError;
export const todosGetTodoEntity = (state, props) =>
  state.todos.entities.todos[props.todoId];
