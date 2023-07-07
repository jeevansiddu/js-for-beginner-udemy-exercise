function except(arr,exclude){
    let narr=[];
    for(let k of arr){
        if(!exclude.includes(k)) narr.push(k);

    }
    console.log(narr);
}

except([1,2,3,1,1,5,7],[1,4,5]);