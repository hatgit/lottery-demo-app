import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Dashboard from './components/Dashboard/';
import LotteryDetails from './components/LotteryDetails/';

export const routes = (
  <Switch>
    <Route exact path="/" component={Dashboard}/>
    <Route path="/details/:name" component={LotteryDetails}/>
  </Switch>
);
