const s1 = 'Hello'; // a primitive
console.log(typeof s1);
//  these both have same functionalities
const s2 = new String('Hello'); // an object
console.log(typeof s2);

// parent object of all elements:
console.log(window);

// create an object
const book1 = {
    title: 'Book One',
    author: 'Jhon Doe',
    year: '2013',

    getDescription: function() {
        return `${this.title} by ${this.author} in the year ${this.year}`
    }
}

console.log(book1);
console.log(book1.title);
console.log(book1.getDescription());
console.log(Object.keys(book1));
console.log(Object.values(book1));

// create a constructor function
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// adding function to constructor explicitly --adds to _proto_ subObject
Book.prototype.getDescription = function() {
    return `${this.title} by ${this.author} in the year ${this.year}`
}

const book2 = new Book('Book2', 'John Doe', 2006);
console.log(book2);
console.log(book2.getDescription());

// inheritance step 1
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}
// step 2
Magazine.prototype = Object.create(Book.prototype);
// step3 --optional
Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine('times', 'author', 2007, 'march');
console.log(mag1);

// ES6 classes
class Cookie {
    constructor(type, flav, chips) {
        this.type = type;
        this.flav = flav;
        this.chips = chips;
    }

    getDescription() {
        return `${this.type} cookie of ${this.flav} flavour with ${this.chips} chips`;    
    }

    static isTasty() {
        return 'Cookies are tasty!';
    }
}

const cookie = new Cookie('Banana', 'chocolate', 'choco');
console.log(cookie.getDescription());
console.log(Cookie.isTasty());

// ES6 inheritance
class Biscuits extends Cookie {
    constructor (type, flav, chips, brand) {
        super(type, flav, chips);
        this.brand = brand;
    }

    //override getDescription method
    getDescription() {
        return `${this.type} biscuits of ${this.flav} flavour with ${this.chips} chips of ${this.brand} company`;    
    }
}

const bis = new Biscuits('milk', 'chocolate', 'choco', 'britania');
console.log(bis.getDescription());