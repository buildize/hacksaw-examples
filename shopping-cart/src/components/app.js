import React, { Component } from 'react';
import { Container, Row, Col } from 'gridual';
import { listener } from 'hacksaw-react';
import UserStore from '../stores/user-store';
import ProductList from './product-list';
import UserSelector from './user-selector';
import CartItems from './cart-items';

class App extends Component {
  get currentUser() {
    return UserStore.context('current').first;
  }

  render() {
    return (
      <Container>
        <p>
          <a href="/">
            <span className="pt-icon-standard pt-icon-undo"></span> Go back to examples
          </a>
          &nbsp;|&nbsp;
          <a href="https://www.github.com/buildize/hacksaw-examples/tree/master/shopping-cart" target="_blank">
            <span className="pt-icon-standard pt-icon-code"></span> View codes
          </a>
        </p>

        <hr />

        <p>Welcome <b>{this.currentUser.name}</b></p>

        <hr />

        <Row>
          <Col md="2/3">
            <h3>Products</h3>
            <div className="pt-card">
              <ProductList user={this.currentUser} />
            </div>
          </Col>
          <Col md="1/3">
            <h3>Your Cart</h3>
            <div className="pt-card">
              <CartItems user={this.currentUser} />
            </div>

            <br /><br />

            <h3>Change User</h3>
            <div className="pt-card">
              <UserSelector />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default listener(UserStore.context('current'))(App);
