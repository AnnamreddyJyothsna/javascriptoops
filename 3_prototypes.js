// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

// Revise / change years
Book.prototype.revise = function(newYear) {
   this.year = newYear;
   this.revised = true;
}

// Instantiate an object
const book1 = new Book('Book one', 'John', '2014');
const book2 = new Book('Book Two', 'Doe', '2016');

console.log(book2);
book2.revise('2018');
console.log(book2);