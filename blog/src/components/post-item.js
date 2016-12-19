import React, { Component } from 'react';
import { Link } from 'react-router';
import marked from 'marked';

export default class PostItem extends Component {
  static defaultProps = {
    details: false
  }

  render() {
    const { post, details } = this.props;

    return (
      <div>
        {details ? (
          <h1>{post.title}</h1>
        ) : (
          <h3>{post.title}</h3>
        )}

        <p>{post.description}</p>

        {details ? (
          <div dangerouslySetInnerHTML={{ __html: marked(post.content || '')}} />
        ) : null}

        <p>
          {details ? (
            <Link to={`/posts/${post.id}/edit`}>Edit</Link>
          ) : (
            <Link to={`/posts/${post.id}`}>Read more</Link>
          )}
        </p>
      </div>
    )
  }
}
