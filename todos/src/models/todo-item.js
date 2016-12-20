import uuid from 'uuid/v4';

export default class TodoItem {
  id = uuid();

  constructor(values) {
    Object.keys(values).forEach(key => {
      this[key] = values[key];
    });
  }
}
