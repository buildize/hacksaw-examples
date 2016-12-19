import React, { Component } from 'react';
import Post from '../models/post';
import PostList from '../components/post-list';
import { listener } from 'hacksaw-react';
import { Spinner } from '@blueprintjs/core';

class PostsContainer extends Component {
  componentWillMount() {
    Post.context('posts').fetch();
  }

  render() {
    const { all: posts, isLoading } = Post.context('posts');

    return isLoading ? (
      <div style={{ textAlign: 'center' }}>
        <Spinner />
      </div>
    ) : (
      <PostList posts={posts} />
    )
  }
}

export default listener(Post.context('posts'))(PostsContainer);
