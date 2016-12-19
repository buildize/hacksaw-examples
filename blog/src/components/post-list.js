import React, { Component } from 'react';
import PostItem from './post-item';
import './posts.css';

export default class PostList extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        {posts.map(post => (
          <div className="post-item">
            <PostItem post={post} />
          </div>
        ))}
      </div>
    )
  }
}
