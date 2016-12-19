import React, { Component } from 'react';
import { listener } from 'hacksaw-react';
import TodoItem from './models/todo-item';
import List from './components/list';
import Form from './components/form';
import './app.css';


// initialized data
TodoItem.put({ content: 'Look at the examples', isDone: true });
TodoItem.put({ content: 'Learn hacksaw' });
TodoItem.put({ content: 'Use hacksaw in a project' });
//

class App extends Component {
  addTodo(object) {
    const item = new TodoItem();
    item.set(object);
    item.save();
  }

  render() {
    const items = TodoItem.all;

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
        <p><b>Items Count:</b> {TodoItem.all.length}</p>
        <p><b>Done Count:</b> {TodoItem.done.length}</p>

        <hr />
        <List items={items} />

        <hr />
        <Form onSubmit={this.addTodo.bind(this)} />
      </div>
    );
  }
}

export default listener(TodoItem)(App);
