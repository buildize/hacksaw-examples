import React, { Component } from 'react';
import { Container, Row, Col } from './components';
import '@blueprintjs/core/dist/blueprint.css';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Container>
          <img src="/logo.png" />
          <ul className="example-list">
            <li>
              <span className="pt-icon-large pt-icon-properties"></span>
              <a href="/todos">
                Todo List Example
              </a>
            </li>
          </ul>

          <hr />

          <h5>Visit hacksaw projects</h5>
          <ul className="repo-links">
            <li><a href="https://www.github.com/Buildize/hacksaw" target="_blank">Hacksaw Repository</a></li>
            <li><a href="https://www.github.com/Buildize/hacksaw-react" target="_blank">Hacksaw React Repository</a></li>
          </ul>
        </Container>
      </div>
    );
  }
}

export default App;
