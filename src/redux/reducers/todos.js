import * as actions from '../actions';

const defaultTodoState = {};

const todoReducer = (state = defaultTodoState, action) => {
  switch (action.type) {
    case actions.TODOS_ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case actions.TODOS_TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };

    default:
      return state;
  }
};

const defaultState = {
  items: [],
  isFetching: false,
  fetchError: '',
};

export default function todosReducer(state = defaultState, action) {
  switch (action.type) {
    case actions.TODOS_ADD_TODO:
      return {
        ...state,
        items: [...state.items, todoReducer(undefined, action)],
      };
    case actions.TODOS_TOGGLE_TODO:
      return {
        ...state,
        items: state.items.map(t => todoReducer(t, action)),
      };
    case actions.TODOS_FETCH_TODOS_START:
      return {
        ...state,
        isFetching: true,
      };
    case actions.TODOS_FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.todos,
      };
    case actions.TODOS_FETCH_TODOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchError: action.error,
      };
    default:
      return state;
  }
}
