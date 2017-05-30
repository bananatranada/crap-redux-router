export const ADD_TODO = 'TODOS_ADD_TODO';
export const TOGGLE_TODO = 'TODOS_TOGGLE_TODO';

const defaultTodoState = {
}

const todoReducer = (state = defaultTodoState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      }
    default:
      return state
  }
}

const defaultState = [
]

export default function todosReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todoReducer(undefined, action),
      ]
    case TOGGLE_TODO:
      return state.map(t => todoReducer(t, action))
    default:
      return state
  }
}

let nextTodoId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
})



export const toggleTodo = id => ({
	type: TOGGLE_TODO,
	id,
})
