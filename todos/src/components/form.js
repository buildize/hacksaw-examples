import React, { Component } from 'react';
import { Button } from '@blueprintjs/core';

export default class Form extends Component {
  state = {}

  componentDidMount() {
    this.refs.input.focus();
  }

  submit(e) {
    e.preventDefault();
    const { content } = this.state;
    this.props.onSubmit({ content });
    this.setState({ content: '' });
  }

  render() {
    const { content } = this.state;

    return (
      <form onSubmit={this.submit.bind(this)}>
        <div className="pt-control-group">
          <input
            ref="input"
            className="pt-input todo-form-input"
            onChange={(e) => this.setState({ content: e.target.value })}
            value={content}
            placeholder="What are you going to do?"
          />
          <Button type="submit">Add Todo</Button>
        </div>
      </form>
    )
  }
}
