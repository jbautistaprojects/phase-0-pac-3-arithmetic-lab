let a=5;
let b=4;
let number=5;
let n="5.5"

function add(a,b){
   return(a + b);
}
add(a,b);

function subtract(a,b){
    return(a-b);
}
subtract(a,b);

function multiply(a,b){
    return(a*b);
}
multiply(a,b);

function divide(a,b){
    return(a/b);
}
divide(a,b);

function increment(n){
    n++;
    return(n);
}
increment(number);

function decrement(n){
    n--;
    return(n);
}
decrement(number);

function makeInt(n){
    n=parseInt(n,10);
    return(n);
}
makeInt(n);

function preserveDecimal(n){
    n=parseFloat(n);
    return(n);
}
makeInt(n);