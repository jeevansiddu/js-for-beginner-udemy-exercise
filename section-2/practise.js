function Ball(){
    this.weight=2;
    this.quantity=5;
    this.objname = function(){
        console.log("ball");
    };

}

const ball = new Ball();
ball.quantity=10; // quanitity can be accessed from outside

console.log(ball.quantity);

//to make it private 
function Ball2(){
    this.weight=2;
    let quantity=5;
    this.objname = function(){
        console.log("ball");
    };
    Object.defineProperty(this,"quantity",{
        get: function(){
            return quantity;
        },
        set: function(value){
            quantity=value+5;
        }
    })

}

const ball2=new Ball2();
try{
    ball2.quantity=2;
    console.log(ball2.quantity);

}
catch(e){
    console.log("error");
}
