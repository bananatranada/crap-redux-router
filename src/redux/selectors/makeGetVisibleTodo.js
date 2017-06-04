import { createSelector } from 'reselect';

import * as actions from '../actions';
import * as visibilityFilterSelectors from './visibilityFilter';
import * as todosSelectors from './todos';

export const makeGetVisibleTodo = () => {
  return createSelector(
    [
      visibilityFilterSelectors.getVisibilityFilter,
      todosSelectors.todosGetTodoEntity,
    ],
    (visibilityFilter, todo) => {
      switch (visibilityFilter) {
        case actions.VISIBILITY_FILTER_STATE_SHOW_ALL:
          return todo;
        case actions.VISIBILITY_FILTER_STATE_SHOW_COMPLETED:
          return todo.completed ? todo : undefined;
        case actions.VISIBILITY_FILTER_STATE_SHOW_ACTIVE:
          return todo.completed ? todo : undefined;
        default:
          return todo;
      }
    }
  );
};
