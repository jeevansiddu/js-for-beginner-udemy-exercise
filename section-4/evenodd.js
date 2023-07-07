function showNumbers(limit){
    for(let i=0;i<limit;i++){
        let k= i%2==0?"EVEN":"ODD";
        console.log(`${i} "${k}"`);
    }
}

showNumbers(10);
