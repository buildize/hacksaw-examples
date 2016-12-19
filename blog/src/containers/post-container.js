import React, { Component } from 'react';
import Post from '../models/post';
import PostItem from '../components/post-item';
import { listener } from 'hacksaw-react';

class PostContainer extends Component {
  componentWillMount() {
    const { id } = this.props.params;
    Post.context('post').clean().get(id);
  }

  render() {
    const post = Post.context('post').first;

    return post ? (
      <PostItem post={post} details />
    ) : null
  }
}

export default listener(Post.context('post'))(PostContainer);
