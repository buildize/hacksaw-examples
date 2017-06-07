import React, { Component } from 'react';
import PostForm from '../components/post-form';
import store from '../store';
import services from '../services';
import { listener } from 'hacksaw-react';
import { history } from '../routes';

const mapToListener = () => {
  const viewStore = store.view('create-container');
  viewStore.clean();

  return {
    viewStore
  }
}

class CreateContainer extends Component {
  handleSubmit(post) {
    services.save(this.props.viewStore, post)
      .then(post => history.push(`posts/${post.id}`));
  }

  render() {
    const { viewStore } = this.props;

    return (
      <PostForm
        post={{}}
        onSubmit={this.handleSubmit.bind(this)}
        isSaving={viewStore.isSaving}
      />
    )
  }
}

export default listener(mapToListener)(CreateContainer);
