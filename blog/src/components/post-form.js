import React, { Component } from 'react';
import { Link } from 'react-router';
import { EditableText } from '@blueprintjs/core';

export default class PostForm extends Component {
  state = {
    post: this.props.post
  }

  handleChange(field) {
    return value => {
      this.setState({ post: { ...this.state.post, [field]: value } });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.post);
  }

  render() {
    const { post } = this.state;

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label className="pt-label">
          Title
          <EditableText
            className="pt-input pt-fill"
            value={post.title}
            onChange={this.handleChange('title').bind(this)}
          />
        </label>

        <br />

        <label className="pt-label">
          Description
          <EditableText
            className="pt-input pt-fill"
            minLines={5} maxLines={5}
            value={post.description}
            onChange={this.handleChange('description').bind(this)}
            multiline
            isEditing
          />
        </label>

        <br />

        <label className="pt-label">
          Content
          <EditableText
            className="pt-input pt-fill"
            minLines={10} maxLines={15}
            value={post.content}
            onChange={this.handleChange('content').bind(this)}
            multiline
            isEditing
          />
        </label>

        <br />
        <button className="pt-button pt-icon-floppy-disk">
          Save
        </button>
      </form>
    )
  }
}
