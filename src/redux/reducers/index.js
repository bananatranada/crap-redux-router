import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './app';
import page from './page';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  router: routerReducer,
  app,
  page,
  todos,
  visibilityFilter,
});

export default rootReducer;
