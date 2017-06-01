import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { routerMiddleware } from 'react-router-redux';

export default function configureStore(preloadedState, history) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(routerMiddleware(history), thunk)
  );

  return store;
}
