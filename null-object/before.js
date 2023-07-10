class Food {
  constructor(name, price, id) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
  isAffordable() {
    return this.price < 200;
  }
}

const foods = [new Food("pizza", "200", 11), new Food("burger", 90, 12)];

function getFood(id) {
  return foods.find((food) => {
    if (food.id == id) {
      return food;
    }
  });
}
function printFood(no) {
  let name = "idly";
  let food = getFood(no);

  if (food != null && food.name != null) {
    // unnecessary  if check to check whether the returned object is null
    console.log(food.name); // explicitly saying the default name as idly and checking its affordability
  } else {
    // for this we can associate the return object if null can associate it with a null object where default values are idly
    console.log(name);
  }
  if (food != null && food.isAffordable != null && food.isAffordable()) {
    console.log("Affordable");
  } else {
    console.log("Not affordable");
  }
}
