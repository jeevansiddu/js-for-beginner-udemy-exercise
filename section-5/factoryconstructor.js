//constructor function
function Address(street,city){
    this.type="Constructor";
    this.street=street;
    this.city=city;
    this.name="jeevan";

}

//fatcory function
function createAddress(street,city){
    return{
        type: "create function",
        street,
        city,
        name: "siddu",
    }
}

const obj1=new Address("papari","mm nagar");
console.log(obj1);

const obj2=createAddress("papari","mm nagar");
console.log(obj2);
