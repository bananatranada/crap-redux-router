import * as actions from '../actions';

export default function visibilityFilterReducer(
  state = actions.VISIBILITY_FILTER_STATE_SHOW_ALL,
  action
) {
  switch (action.type) {
    case actions.VISIBILITY_FILTER_SET:
      return action.filter;
    default:
      return state;
  }
}
