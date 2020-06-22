// object literals
const person = {
    firstname: 'john',
    lastname: 'doe',
    age: 30, 
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main street',
        city: 'Boston',
        state: 'MA'
    }
}
// use dot syntax to access the properties ex: person.firstname
console.log(person);
console.log(person.firstname)

// get variables out of objects
const {firstname, lastname, address: {city}} = person;
console.log(firstname, lastname, city);

// add properties
person.email = 'john.doe@gmail.com';
console.log(person);

// arrays of objects
// convert objects to json

const personJSON = JSON.stringify(person);
console.log(personJSON);

// for loops:
for (let i=0; i<10; i++)    console.log(`for loop ${i}`);

// while loops
let i=0;
while (i < 10) {
    console.log(`while loop ${i}`);
    i ++;
}

const nums = [2, 5, 6, 7];
for (let i=0; i<nums.length; i++)   console.log(`nums[${i}] = ${nums[i]}`);

// for each loop
for (let num of nums)   console.log(num);


