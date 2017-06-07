import React, { Component } from 'react';
import PostList from '../components/post-list';
import store from '../store';
import services from '../services';
import { listener } from 'hacksaw-react';
import { Spinner } from '@blueprintjs/core';

const mapToListener = () => {
  const viewStore = store.view('posts-container');
  services.fetch(viewStore);

  return {
    viewStore
  }
}

class PostsContainer extends Component {
  render() {
    const { viewStore } = this.props;

    return viewStore.isLoading ? (
      <div style={{ textAlign: 'center' }}>
        <Spinner />
      </div>
    ) : (
      <PostList posts={viewStore.posts.all} />
    )
  }
}

export default listener(mapToListener)(PostsContainer);
