var a, b
function add(a, b){
    number = a + b;
    return number;
}

function subtract(a, b){
    number = a - b;
    return number;
}

function multiply(a, b) {
    number = a * b;
    return;
}

function divide(a, b) {
    number = a / b;
    return number;
}
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

function subtract(a, b) {
    return a - b;
}
console.log(subtract(5, 3));

function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 5));

function divide(a, b) {
    return a / b;
}
console.log(divide(24, 12));

function increment(a) {
    let number = a + 1;
    return number;
}
console.log(increment(1));

function decrement(a) {
    let number = a - 1;
    return number;
}
console.log(decrement(27));

function makeInt(a) {
   let number = parseInt(a, 10);
   return number; 
}
console.log(makeInt(2));

function preserveDecimal(a) {
    let number = parseFloat(a, 10);
    return number; 
 }
 console.log(preserveDecimal(2.222));