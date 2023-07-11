function move(arr,ind,offset){
    let k=arr.length;
    let p=ind+offset;
    if(p<0 || p>=k){
        console.error("Invalid");
    }
    else{
        let val=arr[ind];
        for(let i=ind;i<p;i++){
            arr[i]=arr[i+1];
        }
        arr[p]=val;
        console.log(arr);
    }
}

move([1,2,3,4],1,2);