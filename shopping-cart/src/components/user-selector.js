import React, { Component } from 'react';
import UserStore from '../stores/user-store';
import { listener } from 'hacksaw-react';
import { Button } from '@blueprintjs/core';

class UserSelector extends Component {
  addUser() {
    const name = window.prompt('Give a name');
    UserStore.create(name);
  }

  selectUser(id) {
    return () => {
      UserStore.setCurrent(id);
    }
  }

  render() {
    const users = UserStore.all;
    const current = UserStore.current;

    return (
      <div>
        <ul>
          {users.map(user => (
            <li>
              <a onClick={this.selectUser(user.id).bind(this)}>
                {user.id === current.id ? <b>{user.name}</b>: user.name} ({ user.cartItems.length })
              </a>
            </li>
          ))}
        </ul>

        <Button onClick={this.addUser.bind(this)}>
          Add User
        </Button>
      </div>
    )
  }
}

export default listener(UserStore)(UserSelector);
