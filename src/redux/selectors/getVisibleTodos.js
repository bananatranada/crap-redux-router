import { createSelector } from 'reselect';

import * as actions from '../actions';
import * as visibilityFilterSelectors from './visibilityFilter';
import * as todosSelectors from './todos';
import * as schemas from '../schemas';

export const getVisibleTodos = createSelector(
  [
    visibilityFilterSelectors.getVisibilityFilter,
    todosSelectors.getTodosResult,
    todosSelectors.getTodosEntities,
  ],
  (visibilityFilter, todosResult, todosEntities) => {
    console.log('getVisibleTodos', 'hi');
    const todos = schemas.denormalizeTodos(todosResult, todosEntities);
    switch (visibilityFilter) {
      case actions.VISIBILITY_FILTER_STATE_SHOW_ALL:
        return todos;
      case actions.VISIBILITY_FILTER_STATE_SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case actions.VISIBILITY_FILTER_STATE_SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }
);
