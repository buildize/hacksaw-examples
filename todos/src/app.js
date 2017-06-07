import React, { Component } from 'react';
import { listener } from 'hacksaw-react';
import TodoItem from './models/todo-item';
import List from './components/list';
import Form from './components/form';
import store from './store';
import './app.css';


// initialized data
store.items.put(new TodoItem({ content: 'Look at the examples', isDone: true }));
store.items.put(new TodoItem({ content: 'Learn hacksaw' }));
store.items.put(new TodoItem({ content: 'Use hacksaw in a project' }));
//

const doneCount = (items) => items.filter(i => i.isDone).length;

class App extends Component {
  addTodo(object) {
    store.items.put(new TodoItem(object))
  }

  updateItem(item) {
    store.items.put(item);
  }

  render() {
    const items = store.items.all;

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
        <p><b>Items Count:</b> {store.items.all.length}</p>
        <p><b>Done Count:</b> {doneCount(store.items.all)}</p>

        <hr />

        <List onChange={this.updateItem.bind(this)} items={items} />

        <hr />
        
        <Form onSubmit={this.addTodo.bind(this)} />
      </div>
    );
  }
}

export default listener(store)(App);
