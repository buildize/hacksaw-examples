import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Intro extends Component {
  render() {
    return (
      <div>
        <p>Hello</p>
        <p>
          This example project will show you how you can store all pagination
          states with your store.
        </p>
        <p>
          You can also store all search results with this approach.
        </p>
        <p>
          When you click <b>next</b> button the mock api will generate data for
          the next page. When you go back all the state of the app life time
          will be there.
        </p>
        <p>
          Enjoy and help to make hacksaw a great library!
        </p>
        <Link to="pages/1" className="pt-button pt-intent-primary pt-icon-arrow-right">
          Start Pagination
        </Link>
      </div>
    )
  }
}
