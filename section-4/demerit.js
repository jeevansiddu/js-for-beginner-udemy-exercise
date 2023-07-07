function checklimit(a){
    if(a<75) return "OK";
    else if((a-75)/5 > 12){
        return `Licesnse sunspended`;
    }
    else{
        return `Point is : ${(a-75)/5}`;
    }
}

console.log(checklimit(1000));
console.log(checklimit(74));
console.log(checklimit(93));

