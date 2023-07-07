function countOccurrence(arr,key){
    let count = arr.reduce((num,k)=>{
        if(k==key) {
            return num+1;
        }
        else return num;
    },0);
    console.log(count);

}

countOccurrence([1,3,5,7,9,3,3,3,5],5);