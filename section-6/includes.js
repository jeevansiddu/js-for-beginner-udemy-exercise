function search(arr,key){
    let k=arr.length;
    for(let i=0;i<k;i++){
        if(arr[i]==key) return true;
    }
    return false;
}

console.log(search([1,2,3,4],7));