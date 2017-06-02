import * as actions from '../actions';

const defaultState = {
  isLoaded: false, // even if no fetching, each page should explicitly set this to true
};

export default function todosReducer(state = defaultState, action) {
  switch (action.type) {
    case actions.PAGE_SET_IS_LOADED:
      return {
        isPageLoaded: action.isPageLoaded,
      };
    default:
      return state;
  }
}
