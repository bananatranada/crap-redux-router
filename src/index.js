import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import createHistory from 'history/createHashHistory';

import Root from './components/Root/Root';
import configureStore from './redux/store/configureStore';

const history = createHistory();
const store = configureStore(undefined, history);

ReactDOM.render(
  <Root store={store} history={history}>
    <App />
  </Root>,
  document.getElementById('root')
);
registerServiceWorker();
