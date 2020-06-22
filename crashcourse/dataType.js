// data types and identification
const name = 'Ojas';
const age = 22;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z)

// string concatenation
console.log('My name is ' + name + ' and I am ' + age);

// template strings ! use ` symbol
console.log(`My name is ${name} and I am ${age}`);

// string methods
const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substr(6, 4));    // C++ type, second argument specifies length
console.log(s.substring(6, 10)); // Java type, second argument specifies end(not included)

console.log(s.split(''));
console.log(s.split(' '));

const tags = 'technology, computers, it, code'
console.log(tags.split(', '));

// arrays
const array = new Array('ojas', 'ankit', 'shubham', 'nikhil');
console.log(array);

const fruits = ['apple', 'oranges', 'papaya', 'melon'];
console.log(fruits);

console.log(fruits[2]);
// const is used so array cannot be reassigned but elements can be changed

fruits.push(2); //dynamic and loose type array
console.log(fruits);

fruits.pop()
console.log(fruits);

fruits.unshift('mango');
console.log(fruits);

console.log(Array.isArray(fruits));
console.log(fruits.indexOf('papaya'));