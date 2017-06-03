export * from './page';
export * from './todos';
export * from './visibilityFilter';
export * from './makeGetVisibleTodo';

// import { createSelector } from 'reselect';
//
// import * as actions from '../actions';
//
// export const pageIsLoadedSelector = state => state.page.isLoaded;
//
// export const todosItemsSelector = state => state.todos.items;
// export const todosIfFetchingSelector = state => state.todos.isFetching;
// export const todosFetchErrorSelector = state => state.todos.fetchError;
//
// export const visibilityFilterSelector = state => state.visibilityFilter;
//
// export const getVisibleTodos = createSelector(
//   [visibilityFilterSelector, todosItemsSelector],
//   (visibilityFilter, todos) => {
//     switch (visibilityFilter) {
//       case actions.VISIBILITY_FILTER_STATE_SHOW_ALL:
//         return todos;
//       case actions.VISIBILITY_FILTER_STATE_SHOW_COMPLETED:
//         return todos.filter(t => t.completed);
//       case actions.VISIBILITY_FILTER_STATE_SHOW_ACTIVE:
//         return todos.filter(t => !t.completed);
//       default:
//         return todos;
//     }
//   }
// );
