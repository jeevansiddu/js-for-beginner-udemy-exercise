import { Stack } from "./index.js";
const st = new Stack();
st.push(5);
console.log(st.count);
//now this _items is not defined as we are not importing it and we are only importing the stack module
//so the stack array will remain private and can interact it only with the methods
// console.log(_items.get(st)[0]);
