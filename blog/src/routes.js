import React from 'react';
import { useRouterHistory, Router, Route } from 'react-router';
import { createHistory } from 'history';
import App from './app';
import PostsContainer from './containers/posts-container';
import PostContainer from './containers/post-container';
import EditContainer from './containers/edit-container';
import CreateContainer from './containers/create-container';

export default (
  <Router history={useRouterHistory(createHistory)({ basename: '/blog' })}>
    <Route component={App}>
      <Route path="/" component={PostsContainer} />
      <Route path="/posts/new" component={CreateContainer} />
      <Route path="/posts/:id" component={PostContainer} />
      <Route path="/posts/:id/edit" component={EditContainer} />
    </Route>
  </Router>
)
