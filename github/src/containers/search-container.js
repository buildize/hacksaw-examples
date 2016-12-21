import React, { Component } from 'react';
import { listener } from 'hacksaw-react';
import UserStore from '../stores/user-store';
import UserList from '../components/user-list';
import isEqual from 'lodash/isEqual';

class SearchContainer extends Component {
  componentWillMount() {
    this.search(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.location.query, nextProps.location.query)) {
      this.search(nextProps);
    }
  }

  getStore(props) {
    const { query } = props.location;
    return UserStore.context('search', query)
  }

  search(props) {
    const { query } = props.location;
    const { keyword, location, language } = query;

    if (Object.keys(query).length) {
      this.getStore(props).search(keyword, location, language);
    }
  }

  render() {
    const { query } = this.props.location;
    const users = this.getStore(this.props).all;

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

export default listener(UserStore.context('search'))(SearchContainer);
