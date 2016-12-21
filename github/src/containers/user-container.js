import React, { Component } from 'react';
import { listener } from 'hacksaw-react';
import RepoStore from '../stores/repo-store';
import UserStore from '../stores/user-store';
import SearchBar from '../components/search-bar';
import UserInfo from '../components/user-info';
import { history } from '../routes';
import isEqual from 'lodash/isEqual';

class UserContainer extends Component {
  componentWillMount() {
    const { login } = this.props.params;
    UserStore.get(login);
    RepoStore.context('user', login).fetch(login);
  }

  render() {
    const { login } = this.props.params;
    const user = UserStore.all.find(i => i.login === login);
    const repos = RepoStore.context('user', login).all;

    return user ? (
      <div>
        <UserInfo user={user} repos={repos} />
      </div>
    ) : null
  }
}

export default listener(UserStore, RepoStore.context('user'))(UserContainer);
