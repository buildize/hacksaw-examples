import React, { Component } from 'react';
import PostForm from '../components/post-form';
import store from '../store';
import services from '../services';
import { listener } from 'hacksaw-react';
import { history } from '../routes';


const mapToListener = props => {
  const id = Number(props.params.id);
  const viewStore = store.view('edit-container', id);
  viewStore.posts.populate(i => i.id === id);
  services.get(viewStore, id);

  return {
    viewStore
  }
}


class EditContainer extends Component {
  handleSubmit(post) {
    services.save(this.props.viewStore, post)
      .then(post => history.push(`posts/${post.id}`));
  }

  render() {
    const { viewStore } = this.props;
    const post = viewStore.posts.first;

    return post ? (
      <PostForm
        post={post}
        onSubmit={this.handleSubmit.bind(this)}
        isSaving={viewStore.isSaving}
      />
    ) : null
  }
}

export default listener(mapToListener)(EditContainer);
