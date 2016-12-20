import React, { Component } from 'react';
import { listener } from 'hacksaw-react';
import TodoStore from './stores/todo-store';
import TodoItem from './models/todo-item';
import List from './components/list';
import Form from './components/form';
import './app.css';


// initialized data
TodoStore.put(new TodoItem({ content: 'Look at the examples', isDone: true }));
TodoStore.put(new TodoItem({ content: 'Learn hacksaw' }));
TodoStore.put(new TodoItem({ content: 'Use hacksaw in a project' }));
//

class App extends Component {
  addTodo(object) {
    TodoStore.put(new TodoItem(object))
  }

  updateItem(item) {
    TodoStore.put(item);
  }

  render() {
    const items = TodoStore.all;

    return (
      <div className="app">
        <p>
          <a href="/">
            <span className="pt-icon-standard pt-icon-undo"></span> Go back to examples
          </a>
          &nbsp;|&nbsp;
          <a href="https://www.github.com/buildize/hacksaw-examples/tree/master/todos" target="_blank">
            <span className="pt-icon-standard pt-icon-code"></span> View codes
          </a>
        </p>

        <hr />
        <p><b>Items Count:</b> {TodoStore.all.length}</p>
        <p><b>Done Count:</b> {TodoStore.done.length}</p>

        <hr />
        <List onChange={this.updateItem.bind(this)} items={items} />

        <hr />
        <Form onSubmit={this.addTodo.bind(this)} />
      </div>
    );
  }
}

export default listener(TodoStore)(App);
