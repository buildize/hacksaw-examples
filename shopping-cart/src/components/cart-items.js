import React, { Component } from 'react';

export default class CartItems extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <ul>
          {user.cartItems.map(item => (
            <li>{item.name}</li>
          ))}
        </ul>
        <b>Total: </b>${user.cartTotal}
      </div>
    )
  }
}
