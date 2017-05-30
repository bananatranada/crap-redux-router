import { createSelector } from 'reselect';

import * as visibilityFilterModule from '../modules/visibilityFilter';

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;

const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case visibilityFilterModule.SHOW_ALL:
        return todos;
      case visibilityFilterModule.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case visibilityFilterModule.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        return todos;
    }
  }
)

export default getVisibleTodos;
