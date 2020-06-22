function add(num1, num2) {
    return num1 + num2;
}

console.log(add(3, 4));

// anonymous functions
const sub = (a=0, b=0) => (a - b);
console.log(sub(5, 3));

// anonymous function for multiline code
const mul = (a=1, b=1) => {
    return a*b;
}

console.log(mul(5, 7));