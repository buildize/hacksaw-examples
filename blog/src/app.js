import React, { Component } from 'react';
import { Container, Row, Col } from './common';
import Sidebar from './components/sidebar';
import './app.css';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <Container className="main">
        <p>
          <a href="/">
            <span className="pt-icon-standard pt-icon-undo"></span> Go back to examples
          </a>
          &nbsp;|&nbsp;
          <a href="https://www.github.com/buildize/hacksaw-examples/tree/master/blog" target="_blank">
            <span className="pt-icon-standard pt-icon-code"></span> View codes
          </a>
        </p>

        <hr />

        <Row>
          <Col md="4/5">
            {children}
          </Col>
          <Col md="1/5">
            <Sidebar />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
