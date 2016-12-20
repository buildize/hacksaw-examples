import React, { Component } from 'react';
import './app.css';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="main">
        <p>
          <a href="/">
            <span className="pt-icon-standard pt-icon-undo"></span> Go back to examples
          </a>
          &nbsp;|&nbsp;
          <a href="https://www.github.com/buildize/hacksaw-examples/tree/master/pagination" target="_blank">
            <span className="pt-icon-standard pt-icon-code"></span> View codes
          </a>
        </p>

        <hr />

        {children}
      </div>
    );
  }
}

export default App;
