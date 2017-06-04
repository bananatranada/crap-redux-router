import React from 'react';
import { Route, Switch } from 'react-router';

import InitHome from './containers/InitHome/InitHome';
import NotFound from './pages/NotFound/NotFound';

const routes = store => {
  return (
    <Switch>
      <Route exact path="/" component={InitHome} />
      <Route component={NotFound} />
    </Switch>
  );
};
export default routes;
