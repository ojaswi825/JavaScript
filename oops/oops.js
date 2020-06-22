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