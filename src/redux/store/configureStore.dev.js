import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { routerMiddleware } from 'react-router-redux';
import DevTools from '../../components/DevTools/DevTools';

export default function configureStore(preloadedState, history) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(history), sagaMiddleware),
      DevTools.instrument()
    )
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
