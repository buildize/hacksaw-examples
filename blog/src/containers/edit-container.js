import React, { Component } from 'react';
import PostStore from '../stores/post-store';
import PostForm from '../components/post-form';
import { listener } from 'hacksaw-react';
import { history } from '../routes';

class EditContainer extends Component {
  componentWillMount() {
    const { id } = this.props.params;
    PostStore.get(id);
  }

  handleSubmit(post) {
    PostStore.save(post).then(post => history.push(`/posts/${post.id}`));
  }

  render() {
    const { id } = this.props.params;
    const post = PostStore.all.find(i => i.id === Number(id));

    return post ? (
      <PostForm
        post={post}
        onSubmit={this.handleSubmit.bind(this)}
      />
    ) : null
  }
}

export default listener(PostStore)(EditContainer);
