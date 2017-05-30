import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

const routes = store => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default routes;
