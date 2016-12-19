import React, { Component } from 'react';
import { listener } from 'hacksaw-react';
import TodoItem from './models/todo-item';
import List from './components/list';
import Form from './components/form';

class App extends Component {
  addTodo(object) {
    const item = new TodoItem();
    item.set(object);
    item.save();
  }

  render() {
    const items = TodoItem.all;

    return (
      <div>
        <p><b>Items Count:</b> {TodoItem.all.length}</p>
        <p><b>Done Count:</b> {TodoItem.done.length}</p>
        <List items={items} />
        <Form onSubmit={this.addTodo.bind(this)} />
      </div>
    );
  }
}

export default listener(TodoItem)(App);
