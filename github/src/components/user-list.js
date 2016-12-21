import React, { Component } from 'react';
import { Row, Col } from '../common';
import UserItem from './user-item';

export default class UserList extends Component {
  render() {
    const { users } = this.props;

    return (
      <Row>
        {users.map(user => (
          <Col md="1/4">
            <UserItem user={user} />
          </Col>
        ))}
      </Row>
    )
  }
}
