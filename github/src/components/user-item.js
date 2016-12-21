import React, { Component } from 'react';
import { Link } from 'react-router';
import './user-item.css';

export default class UserItem extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="user-item">
        <Link to={`${user.login}`}>
          <p><img src={user.avatar_url} /></p>
          <b>{user.login}</b>
        </Link>
      </div>
    )
  }
}
