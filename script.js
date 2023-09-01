function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(a,op,b) {
    console.log(a,op,b);
    if (op==='+') {
        add(a,b);
    }
    else if (op==='-') {
        subtract(a,b);
    }  
    else if (op==='*') {
        multiply(a,b);
    }
    else if (op==='/') {
        divide(a,b);
    }
}
let num1;
let num2;
let op;

console.log(add(10,5));
console.log(subtract(10,5));
console.log(multiply(10,5));
console.log(divide(10,5));
console.log(operate(4,'+',5));

