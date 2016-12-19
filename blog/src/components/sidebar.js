import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/posts/new">Create a Post</Link></li>
        </ul>
      </div>
    )
  }
}
