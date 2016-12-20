import React from 'react';
import { useRouterHistory, Router, Route } from 'react-router';
import { createHistory } from 'history';
import App from './app';
import Intro from './intro';
import Page from './page';

export const history = useRouterHistory(createHistory)({ basename: '/pagination' });

export default (
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={Intro} />
      <Route path="/pages/:page" component={Page} />
    </Route>
  </Router>
)
