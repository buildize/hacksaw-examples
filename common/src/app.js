import React, { Component } from 'react';
import { Container, Row, Col } from './components';
import '@blueprintjs/core/dist/blueprint.css';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Container>
          <h1>Welcome to Hacksaw examples</h1>
          <ul className="example-list">
            <li><a href="/todos">Todo List Example</a></li>
          </ul>
        </Container>
      </div>
    );
  }
}

export default App;
