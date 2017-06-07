import React, { Component } from 'react';
import UserList from '../components/user-list';
import store from '../store';
import { userServices } from '../services';
import { listener } from 'hacksaw-react';

const mapToListener = props => {
  const { query } = props.location;
  const { keyword, location, language } = query;
  const viewStore = store.view('search-container', query);

  if (Object.keys(query).length) {
    userServices.search(viewStore, keyword, location, language)
  }

  return {
    viewStore
  }
}

class SearchContainer extends Component {
  render() {
    const { viewStore } = this.props;
    const users = viewStore.users.all;

    return users.length ? (
      <div>
        <UserList
          users={users}
        />
      </div>
    ) : (
      <div>
        <div className="pt-non-ideal-state">
          <div className="pt-non-ideal-state-visual pt-non-ideal-state-icon">
            <span className="pt-icon pt-icon-user"></span>
          </div>
          <h4 className="pt-non-ideal-state-title">No User Found</h4>
          <div className="pt-non-ideal-state-description">
            You can search users by keyword, location and language.
          </div>
        </div>
      </div>
    )
  }
}

export default listener(mapToListener)(SearchContainer);
