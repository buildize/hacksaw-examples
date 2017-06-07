import React, { Component } from 'react';
import { Spinner } from '@blueprintjs/core';
import { Link } from 'react-router';
import { listener } from 'hacksaw-react';
import cx from 'classnames';
import store from './store';
import services from './services';

const mapToListener = props => {
  const { page } = props.params;
  const viewStore = store.view('pages', page);
  services.fetch(viewStore, page);

  return { viewStore }
}

class Page extends Component {
  render() {
    const { viewStore, params: { page } } = this.props;
    const items = viewStore.items.all;

    return (
      <div>
        <h3>Page: {page}</h3>
        <hr />

        {viewStore.isLoading ? (
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

export default listener(mapToListener)(Page)
