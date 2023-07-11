function extend(Child, Parent) {
  //this is called as interediate funcion inheritance
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
function Vehicle(radius) {}

Vehicle.prototype.wheels = () => {
  console.log("No whhels");
};

function Car() {
  Vehicle.call(this, 5);
  //   this.name = () => {
  //     return "Vehicle";
  //   };
}
// Car.prototype.name = () => { // initialisation before wont work
//   console.log("car");
// };

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;
//instead of this we can have like
extend(Car, Vehicle);

function Bike() {}
extend(Bike, Vehicle);
Bike.prototype.wheels = () => {
  console.log("2 whees");
};
Car.prototype.name = () => {
  console.log("car");
};
Car.prototype.wheels = () => {
  console.log("4 wheels");
  //to call the Vehicle class whhels function
  Vehicle.prototype.wheels.call(this);
};
let car = new Car();
let vehicle = new Vehicle();

const vehicles = [new Car(), new Bike()];
for (let v of vehicles) {
  v.wheels(); // runtime polymorphism
}
