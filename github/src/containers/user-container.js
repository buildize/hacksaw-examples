import React, { Component } from 'react';
import { listener } from 'hacksaw-react';
import store from '../store';
import { userServices, repoServices } from '../services';
import SearchBar from '../components/search-bar';
import UserInfo from '../components/user-info';
import { history } from '../routes';
import isEqual from 'lodash/isEqual';

const mapToListener = props => {
  const { login } = props.params;
  const viewStore = store.view('user-container', login);

  userServices.get(viewStore, login);
  repoServices.fetch(viewStore, login);

  return {
    viewStore
  }
}


class UserContainer extends Component {
  render() {
    const { viewStore } = this.props;
    const user = viewStore.users.first;
    const repos = viewStore.repos.all;

    return user ? (
      <div>
        <UserInfo user={user} repos={repos} />
      </div>
    ) : null
  }
}

export default listener(mapToListener)(UserContainer);
