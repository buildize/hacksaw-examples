import React, { Component } from 'react';

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
        <input
          ref="input"
          onChange={(e) => this.setState({ content: e.target.value })}
          value={content}
        />
        <button>Add</button>
      </form>
    )
  }
}
