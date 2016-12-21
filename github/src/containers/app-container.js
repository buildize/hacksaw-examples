import React, { Component } from 'react';
import { Container } from '../common';
import SearchBar from '../components/search-bar';
import { history } from '../routes';

class AppContainer extends Component {
  submit(query) {
    history.push({
      pathname: '/',
      query
    });
  }

  render() {
    const { children } = this.props;
    const { location: { query } } = this.props;

    return (
      <Container className="main">
        <p>
          <a href="/">
            <span className="pt-icon-standard pt-icon-undo"></span> Go back to examples
          </a>
          &nbsp;|&nbsp;
          <a href="https://www.github.com/buildize/hacksaw-examples/tree/master/github" target="_blank">
            <span className="pt-icon-standard pt-icon-code"></span> View codes
          </a>
        </p>
        <hr />

        <h1>Search Github Users</h1>

        <SearchBar
          onSubmit={this.submit}
          filters={query}
        />

        <hr />

        {children}
      </Container>
    );
  }
}

export default AppContainer;
