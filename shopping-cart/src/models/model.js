export default class Model {
  constructor(values = {}) {
    Object.keys(values).forEach(key => {
      this[key] = values[key];
    });
  }

  merge(next) {
    return new this.constructor(Object.assign({}, this, next));
  }
}
