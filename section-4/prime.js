function showPrime(k){
    for(let i=2;i<=k;i++){
        let c=0;
        for(let j=2;j<i;j++){
            if(i%j==0){
                c++;
                break;
            }
        }
        if(c==0) console.log(i);
    }
}
showPrime(20);