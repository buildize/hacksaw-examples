import React, { Component } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import { Spinner } from '@blueprintjs/core';
import { listener } from 'hacksaw-react';
import AppStore from './stores/app-store';

window.AppStore = AppStore;

class Page extends Component {
  componentWillMount() {
    this.fetch(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.page !== nextProps.params.page) this.fetch(nextProps);
  }

  fetch(props) {
    const { page } = props.params;
    AppStore.context('pages', page).fetch(page);
  }

  render() {
    const page = this.props.params.page;
    const { all: items, isLoading } = AppStore.context('pages', page);

    return (
      <div>
        <h3>Page: {page}</h3>
        <hr />

        {isLoading ? (
          <div style={{ textAlign: 'center' }}>
            <p>
              <Spinner />
            </p>
            <p>Loading for the first time</p>
          </div>
        ) : (
          <ul>
            {items.map(item => (
              <li>{item.content}</li>
            ))}
          </ul>
        )}

        <hr />

        <Link to={page === '1' ? '/' : `/pages/${(Number(page) - 1)}`} className="pt-button pt-intent-primary pt-icon-arrow-left">
          Back
        </Link>
        &nbsp;
        <Link to={`/pages/${Number(page) + 1}`} className="pt-button pt-intent-primary pt-icon-arrow-right">
          Next
        </Link>
      </div>
    )
  }
}

export default listener(AppStore.context('pages'))(Page)
