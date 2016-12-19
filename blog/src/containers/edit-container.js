import React, { Component } from 'react';
import Post from '../models/post';
import PostForm from '../components/post-form';
import { listener } from 'hacksaw-react';
import { browserHistory } from 'react-router';

class EditContainer extends Component {
  componentWillMount() {
    const { id } = this.props.params;
    Post.get(id);
  }

  handleSubmit(post) {
    Post.save(post).then(post => browserHistory.push(`/posts/${post.id}`));
  }

  render() {
    const { id } = this.props.params;
    const post = Post.all.find(i => i.id === Number(id));

    return post ? (
      <PostForm
        post={post.toObject()}
        onSubmit={this.handleSubmit.bind(this)}
      />
    ) : null
  }
}

export default listener(Post)(EditContainer);
