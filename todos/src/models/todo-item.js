import { model } from 'hacksaw';
import uuid from 'uuid/v4';

class TodoItem {
  static keys = ['uuid']; // default is [id]
  uuid = uuid();

  static get done() {
    return this.all.filter(i => i.isDone);
  }

  save() {
    this.context.put(this);
  }
}

export default model(TodoItem);
