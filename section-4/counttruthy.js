function counttruthy(array){
    let k=array.length;
    let c=0;
    for(let i=0;i<k;i++){
        if(Boolean(array[i])==true){
            c++;
        }
    }
    return c;
}

console.log(counttruthy(["",0,"frff",null,"rfrfrf",54]));