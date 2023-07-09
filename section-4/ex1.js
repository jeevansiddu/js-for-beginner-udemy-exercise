function HTMLElement() {
  this.click = () => {
    console.log("clicked");
  };
}
HTMLElement.prototype.focus = () => {
  console.log("Focused");
};

let ele = new HTMLElement();

function HTMLSelectElement(...ele) {
  this.items = [...ele];
  this.addItem = (val) => {
    this.items.push(val);
  };
  this.removeItem = (val) => {
    let ind = this.items.indexOf(val);
    for (let i = ind; i < this.items.length - 1; i++) {
      this.items[i] = this.items[i + 1];
    }
    this.items.length = this.items.length - 1;
  };
}
HTMLSelectElement.prototype = Object.create(new HTMLElement());
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

let hele = new HTMLSelectElement(1, 2, 3, 4);
