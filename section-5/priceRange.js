const obj = {
    name: "oil",
    price: 10,
    get range(){
        if(this.price<10){
            return "cheap";
        }
        else{
            return "expensive";
        }
    },
    cost: 'this.range()',
}
function Object(name,price){
    this.name=name;
}
console.log(obj.range);
// console.log(obj.cost);