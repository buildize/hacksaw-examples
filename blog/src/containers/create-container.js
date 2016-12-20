import React, { Component } from 'react';
import PostStore from '../stores/post-store';
import PostForm from '../components/post-form';
import { history } from '../routes';

export default class CreateContainer extends Component {
  handleSubmit(post) {
    PostStore.save(post).then(post => history.push(`posts/${post.id}`));
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
