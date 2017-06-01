import * as actions from '../actions';

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';

const defaultState = SHOW_ALL;

export default function visibilityFilterReducer(state = defaultState, action) {
  switch (action.type) {
    case actions.VISIBILITY_FILTER_SET:
      return action.filter;
    default:
      return state;
  }
}
