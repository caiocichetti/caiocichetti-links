import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Setup from './pages/Setup';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/setup/' component={Setup} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
