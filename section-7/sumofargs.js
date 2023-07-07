function sum(...args){
    if(Array.isArray(args[0])){
        let len=args[0].length;
        return args[0].reduce((sum,curr)=>{
                return sum+curr;
            },0);
        
    }
    else{
        let sum=0;
        for(let k of arguments){
            sum+=k;
        }
        return sum;
    }
}

console.log(sum([1,2,3,4,5,7])); //array

console.log(sum(1,2,3,4,5,7)); // no array