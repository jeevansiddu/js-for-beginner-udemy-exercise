function countOccurrence(arr,key){
    if(!Array.isArray(arr)){
        throw new Error("Pass only array");
    }
    let count = arr.reduce((num,k)=>{
        if(k==key) {
            return num+1;
        }
        else return num;
    },0);
    console.log(count);

}
try{
countOccurrence(null,5);
}
catch(e){
    console.error(e);
}