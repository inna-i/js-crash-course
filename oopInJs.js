function SuperHero(name) {
    this.name = name;
    this.canFly = true;
    this.brave = true;

    this.fly = function() {
        console.log('I can fly');
    }

    this.fight = function(word) {
        console.log(`${word}, let's figth`);
    }
}

SuperHero.prototype.run = function(scared) {
    if (scared) {
        console.log("I'm running");
        return;
    } 
    
    console.log("I don't want to run");

}
 
const IronMan = new SuperHero('Tony Stark');
console.log(IronMan.name);
IronMan.fly();
IronMan.fight('Loki');
IronMan.run(false);

const WonderWoman = new SuperHero('Wonder Wonam');


class Book {
    constructor(name, author, year) {
        this.bookName = name;
        this.author = author;
        this.year = year;
    }

    read() {
        console.log('read the book');
    }

    printName() {
        console.log(`This is ${this.bookName} book`);
    }

}

const HarryPotter = new Book('Harry Potter', 'J. K. Rowling', 2001);

console.log(HarryPotter.printName());

const Dune = new Book('Dune', 'Frank Herbert', 1965);

console.log(Dune.printName());