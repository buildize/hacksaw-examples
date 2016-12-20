import React, { Component } from 'react';
import PostStore from '../stores/post-store';
import PostList from '../components/post-list';
import { listener } from 'hacksaw-react';
import { Spinner } from '@blueprintjs/core';

class PostsContainer extends Component {
  componentWillMount() {
    PostStore.context('posts').fetch();
  }

  render() {
    const { all: posts, isLoading } = PostStore.context('posts');

    return isLoading ? (
      <div style={{ textAlign: 'center' }}>
        <Spinner />
      </div>
    ) : (
      <PostList posts={posts} />
    )
  }
}

export default listener(PostStore.context('posts'))(PostsContainer);
