function showAddress(obj){
    for(let key in obj){
        console.log(key+" "+obj[key]);
    }
}

const obj = {
    street: "paari",
    city: "mm nagar",
    zipcode: 2012109
}
showAddress(obj);