import React, { Component } from 'react';
import PostItem from '../components/post-item';
import store from '../store';
import services from '../services';
import { listener } from 'hacksaw-react';
import { Spinner } from '@blueprintjs/core';

const mapToListener = props => {
  const id = Number(props.params.id);
  const viewStore = store.view('post-container');
  viewStore.clean();
  viewStore.posts.populate(i => i.id === id);
  services.get(viewStore, id);

  return {
    viewStore
  }
}

class PostContainer extends Component {
  render() {
    const { viewStore } = this.props;
    const post = viewStore.posts.first;

    return (
      <div>
        { post ? <PostItem post={post} details /> : null }
        { viewStore.isLoading ? (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Spinner />
            <p>Loading rest of the data</p>
          </div>
        ) : null }
      </div>
    )
  }
}

export default listener(mapToListener)(PostContainer);
