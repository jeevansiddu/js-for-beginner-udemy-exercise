function fizzbuzz(a){
    if(a%3==0 && a%5==0){
        console.log("fizzbuzz");

    }
    else if(a%3==0) console.log("fizz");
    else if(a%5==0){
        console.log("buzz");
    }
    else if(isNaN(a)){
        console.log("Not a number");
    }
    else{
        console.log(a);
    }
}
fizzbuzz(3);
fizzbuzz(5);
fizzbuzz(15);
fizzbuzz("ffj");
fizzbuzz(7);