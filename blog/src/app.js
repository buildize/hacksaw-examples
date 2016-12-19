import React, { Component } from 'react';
import { Container, Row, Col } from './common';
import Sidebar from './components/sidebar';
import './app.css';

class App extends Component {
  render() {
    const { children } = this.props;
    
    return (
      <Container className="main">
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
