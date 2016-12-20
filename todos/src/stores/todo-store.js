import { store } from 'hacksaw';

class TodoStore {
  static get done() {
    return this.all.filter(i => i.isDone);
  }
}

export default store(TodoStore);
