//abstraction

//implementation detail
let _items = new WeakMap();

//public interface
export class Stack {
  constructor() {
    _items.set(this, []);
  }
  push(item) {
    _items.get(this).push(item);
  }
  pop() {
    if (_items.get(this).length == 0) throw new Error("Empty");
    return _items.get(this).pop();
  }
  peek() {
    if (_items.get(this).length == 0) throw new Error("Empty");
    return _items.get(this)[_items.get(this).length - 1];
  }
  get count() {
    return _items.get(this).length;
  }
}
