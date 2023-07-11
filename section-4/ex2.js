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
  this.render = () => {
    let str = "<select>";
    for (let item of this.items) {
      str += `
      <options>${item}</options>
      `;
    }
    str += "</select>";
    return str;
  };
}
HTMLSelectElement.prototype = Object.create(new HTMLElement());
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

function HTMLImageElement(val = undefined) {
  this.src = val;
  this.render = () => {
    return (src = `<img src=${this.src} />`);
  };
}
HTMLImageElement.prototype = Object.create(new HTMLElement());
HTMLImageElement.prototype.constructor = HTMLImageElement;

let hele = new HTMLSelectElement(1, 2, 3, 4);
let arr = [
  new HTMLSelectElement(1, 2, 3, 4),
  new HTMLImageElement("http://imahgeloc"),
];
for (let k of arr) {
  console.log(k.render());
}
