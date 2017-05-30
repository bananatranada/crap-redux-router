export const SET = 'VISIBILITY_FILTER_SET';
export const SHOW_ALL = 'VISIBILITY_FILTER_SHOW_ALL';
export const SHOW_ACTIVE = 'VISIBILITY_FILTER_SHOW_ACTIVE';
export const SHOW_COMPLETED = 'VISIBILITY_FILTER_SHOW_COMPLETED';

const defaultState = SHOW_ALL;

export default function visibilityFilterReducer(state = defaultState, action) {
  switch (action.type) {
    case SET:
      return action.filter
    default:
      return state
  }
}

export const setVisibilityFilter = filter => ({
	type: SET,
	filter,
})
