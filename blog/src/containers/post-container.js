import React, { Component } from 'react';
import PostStore from '../stores/post-store';
import PostItem from '../components/post-item';
import { listener } from 'hacksaw-react';
import { Spinner } from '@blueprintjs/core';

class PostContainer extends Component {
  componentWillMount() {
    const id= Number(this.props.params.id);
    PostStore.context('post').clean().populate(i => i.id === id).get(id);
  }

  render() {
    const { first: post, isLoading } = PostStore.context('post');

    return (
      <div>
        { post ? <PostItem post={post} details /> : null }
        { isLoading ? (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Spinner />
            <p>Loading rest of the data</p>
          </div>
        ) : null }
      </div>
    )
  }
}

export default listener(PostStore.context('post'))(PostContainer);
