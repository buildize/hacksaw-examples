import React, { Component } from 'react';

export default class List extends Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        {items.map(item => (
          <p>
            <label>
              <input
                type="checkbox"
                onChange={e => item.set({ isDone: e.target.checked })}
              />
              {item.content}
            </label>
          </p>
        ))}
      </div>
    )
  }
}
