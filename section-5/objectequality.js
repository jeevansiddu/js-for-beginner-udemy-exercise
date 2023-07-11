function areSame(address1,address2){
    return address1===address2;
}
function areEqual(address1,address2){
    for(key in address1){
        if(address1[key]!=address2[key]){
            return false;
        }
    }
    return true;
}

function Address(a,b){
    this.a=a;
    this.b=b;
}
let address1 = new Address('a','b');
let address2 = new Address('a','b');
let address3=address1;
console.log(areEqual(address1,address2));
console.log(areSame(address1,address3));