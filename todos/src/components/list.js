import React, { Component } from 'react';

export default class List extends Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        {items.map(item => (
          <p>
            <label className="pt-control pt-checkbox">
              <input
                type="checkbox"
                onChange={e => item.set({ isDone: e.target.checked })}
                checked={item.isDone}
              />
              <span className="pt-control-indicator"></span>
              {item.content}
            </label>
          </p>
        ))}
      </div>
    )
  }
}
