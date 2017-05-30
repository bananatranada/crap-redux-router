import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../modules/rootReducer'
import { routerMiddleware } from 'react-router-redux'
import DevTools from '../../components/DevTools/DevTools'

export default function configureStore(preloadedState, history) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(history), thunk),
      DevTools.instrument()
    )
  )

  return store
}
