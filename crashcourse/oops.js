// A simple object
const person = {
    name: {
        first: 'Ojaswi',
        last: 'Athghara'
    },
    age: 22,

    greet: function() {
        console.log(`Hi! I am ${this.name.first} ${this.name.last}. I am ${this.age}`)
    }
}

person.greet();


// A simple constructor function
const Person = function(firstname, lastname, age) {
    const name = {
        first: firstname,
        last: lastname
    },

    person = {
        name: name,
        age: age
    }

    person.greet = function() {
        console.log(`Hi! I am ${this.name.first} ${this.name.last}. I am ${this.age}`)
    }

    return person;
}
// calling a constructor
const ojas = Person('Ojaswi', 'Athghara', 22);
const vins = Person('Vinay', 'Kumar', 23);
ojas.greet();
vins.greet();



// another way to create a constructor
function CreatePerson(name) {
    this.name = name;
    this.greet = function() {
        console.log(`My name is ${name}!`)
    };
}

// use new here
const nikhil = new CreatePerson('Nikhil');
nikhil.greet();


// the second way is more common, a more complex example:
function CreateAPerson(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;

    this.bio = function() {
        console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name.first + '.');
    };
};

let per1 = new CreateAPerson('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
console.log(per1)
per1.greeting();
per1.bio();



// object creation with generic object
const p1 = new Object();
p1.name = 'Ojas'
console.log(p1.name);

const p2 = Object.create(p1);
console.log(p2.name);