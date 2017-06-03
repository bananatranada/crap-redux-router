import * as actions from '../actions';

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.TODOS_ADD_SUCCESS:
      return {
        id: action.todo.id,
        text: action.todo.text,
        completed: false,
      };
    case actions.TODOS_TOGGLE_SUCCESS:
      return {
        ...state.entities.todos[action.todo.id],
        completed: action.todo.completed,
      };
    default:
      return state;
  }
};

export default function todosReducer(
  state = {
    entities: {},
    result: [],
    isFetching: false,
    fetchError: '',
    isAdding: false,
    addError: '',
    isToggling: false,
    toggleError: '',
  },
  action
) {
  switch (action.type) {
    case actions.TODOS_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actions.TODOS_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.todos,
      };
    case actions.TODOS_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchError: action.error.toString(),
      };
    case actions.TODOS_ADD_REQUEST:
      return {
        ...state,
        isAdding: true,
      };
    case actions.TODOS_ADD_SUCCESS:
      return {
        ...state,
        isAdding: false,
        result: [...state.result, action.todo.id],
        entities: {
          ...state.entities,
          todos: {
            ...state.entities.todos,
            [action.todo.id]: todoReducer(undefined, action),
          },
        },
      };
    case actions.TODOS_ADD_FAILURE:
      return {
        ...state,
        isAdding: false,
        addError: action.error.toString(),
      };
    case actions.TODOS_TOGGLE_REQUEST:
      return {
        ...state,
        isToggling: true,
      };
    case actions.TODOS_TOGGLE_SUCCESS:
      return {
        ...state,
        isToggling: false,
        entities: {
          ...state.entities,
          todos: {
            ...state.entities.todos,
            [action.todo.id]: todoReducer(state, action),
          },
        },
      };
    case actions.TODOS_TOGGLE_FAILURE:
      return {
        ...state,
        isToggling: false,
        toggleError: action.error.toString(),
      };
    default:
      return state;
  }
}
