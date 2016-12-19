import React, { Component } from 'react';
import Post from '../models/post';
import PostForm from '../components/post-form';
import { browserHistory } from 'react-router';

export default class CreateContainer extends Component {
  handleSubmit(post) {
    Post.save(post).then(post => browserHistory.push(`/posts/${post.id}`));
  }

  render() {
    return (
      <PostForm
        post={{}}
        onSubmit={this.handleSubmit.bind(this)}
      />
    )
  }
}
