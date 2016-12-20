import React, { Component } from 'react';
import PostStore from '../stores/post-store';
import PostForm from '../components/post-form';
import { listener } from 'hacksaw-react';
import { history } from '../routes';

class EditContainer extends Component {
  componentWillMount() {
    const { id } = this.props.params;
    PostStore.context('edit').get(id);
  }

  handleSubmit(post) {
    PostStore.context('edit').save(post).then(post => history.push(`posts/${post.id}`));
  }

  render() {
    const { id } = this.props.params;
    const post = PostStore.all.find(i => i.id === Number(id));
    const isSaving = PostStore.context('edit').isSaving;

    return post ? (
      <PostForm
        post={post}
        onSubmit={this.handleSubmit.bind(this)}
        isSaving={isSaving}
      />
    ) : null
  }
}

export default listener(PostStore.context('edit'))(EditContainer);
