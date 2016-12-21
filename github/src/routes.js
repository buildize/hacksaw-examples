import React from 'react';
import { useRouterHistory, Router, Route } from 'react-router';
import { createHistory } from 'history';

import AppContainer from './containers/app-container'
import SearchContainer from './containers/search-container';
import UserContainer from './containers/user-container';

export const history = useRouterHistory(createHistory)({ basename: '/github' });

export default (
  <Router history={history}>
    <Route component={AppContainer}>
      <Route path="/" component={SearchContainer} />
      <Route path="/:login" component={UserContainer} />
    </Route>
  </Router>
)
