function showstars(k){
    for(let i=0;i<k;i++){
        let s="";
        for(let j=0;j<=i;j++){
            s+="*";
        }
        console.log(s);
    }
}
showstars(10);