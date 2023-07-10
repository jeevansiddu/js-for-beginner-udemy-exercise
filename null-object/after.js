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

class NullFood {
  constructor() {
    this.name = "idly";
    this.price = 80;
    this.id = 1;
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
  let food = getFood(no);
  food = food == null ? new NullFood() : food; //here we check whether the food is valid if not valid we automatically
  //associate it with the null object so rest it will take care by itself
  console.log(food.name);

  if (food != null && food.isAffordable != null && food.isAffordable()) {
    console.log("Affordable");
  } else {
    console.log("Not affordable");
  }
}
