function getMax(arr){
    let max = arr.reduce((max,curr)=>{
        if(curr>max){
            return curr;
        }
        return max;
    },arr[0]);
    console.log(max);
}

getMax([1,3,6,99,65,76,9]);