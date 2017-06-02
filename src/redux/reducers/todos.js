import * as actions from '../actions';

const defaultTodoState = {};

const todoReducer = (state = defaultTodoState, action) => {
  switch (action.type) {
    case actions.TODOS_ADD:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case actions.TODOS_TOGGLE:
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
  isAdding: false,
  addError: '',
};

export default function todosReducer(state = defaultState, action) {
  switch (action.type) {
    case actions.TODOS_ADD:
      return {
        ...state,
        items: [...state.items, todoReducer(undefined, action)],
      };
    case actions.TODOS_TOGGLE:
      return {
        ...state,
        items: state.items.map(t => todoReducer(t, action)),
      };
    case actions.TODOS_FETCH_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case actions.TODOS_FETCH_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        items: action.todos,
      };
    case actions.TODOS_FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        fetchError: action.error,
      };
    case actions.TODOS_ADD_REQUESTED:
      return {
        ...state,
        isAdding: true,
      };
    case actions.TODOS_ADD_SUCCEEDED:
      return {
        ...state,
        isAdding: false,
        items: [...state.items, action.todo],
      };
    case actions.TODOS_ADD_FAILED:
      return {
        ...state,
        isAdding: false,
        addError: action.err,
      };
    default:
      return state;
  }
}
