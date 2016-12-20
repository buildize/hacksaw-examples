import React, { Component } from 'react';

export default class List extends Component {
  handleChange(index) {
    return e => {
      const { onChange, items } = this.props;
      items[index].isDone = e.target.checked;
      onChange(items[index])
    }
  }

  render() {
    const { items } = this.props;

    return (
      <div>
        {items.map((item, index) => (
          <p>
            <label className="pt-control pt-checkbox">
              <input
                type="checkbox"
                onChange={this.handleChange(index).bind(this)}
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
