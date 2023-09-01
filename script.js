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
    if (op==='+') {
        return add(Number(a),Number(b));
    }
    else if (op==='-') {
        return subtract(Number(a),Number(b));
    }  
    else if (op==='*') {
        return multiply(Number(a),Number(b));
    }
    else if (op==='/') {
        return divide(Number(a),Number(b));
    }
}
let arr = [];
function chngDisp(val) {
    display.innerHTML = val;
}


let num1;
let num2;
let op;
let valDisp;
let total = 0;
let sign;

let display = document.getElementById('display');
const plus = document.getElementById('plus');
const eqlBtn = document.getElementById('equal');

function addBtn() {
    total = operate(total,'+',display.innerHTML);
    console.log(total);
    display.innerHTML = total;
    sign = '+';
}
function equate() {
    if (sign==='+'){
        total = operate(total,'+',display.innerHTML);
    }
    sign ='';
    display.innerHTML = total;
}


