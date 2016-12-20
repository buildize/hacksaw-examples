import React, { Component } from 'react';
import PostStore from '../stores/post-store';
import PostForm from '../components/post-form';
import { listener } from 'hacksaw-react';
import { history } from '../routes';

class CreateContainer extends Component {
  handleSubmit(post) {
    PostStore.context('create').save(post).then(post => history.push(`posts/${post.id}`));
  }

  render() {
    const { isSaving } = PostStore.context('create');

    return (
      <PostForm
        post={{}}
        onSubmit={this.handleSubmit.bind(this)}
        isSaving={isSaving}
      />
    )
  }
}

export default listener(PostStore.context('create'))(CreateContainer);
