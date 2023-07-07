function stringproperty(obj){
    // console.log(typeof obj["name"]);
    for(prop in obj){
        if((typeof obj[prop])=="string")
            console.log(`${prop} ${obj[prop]}`);
    }
}

let person= {
    name:"jeevan",
    age: 25,
    address: "fhfgyugf",
    ph: 44,
    dept: "cse"
};
stringproperty(person);