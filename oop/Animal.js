class Animal {
    constructor(type, name) {
        this.type = type;
        this.name = name;

        this.isFluffy = true;
    }

    getName() {
        console.log(this.name);
    }

    getType() {
        console.log(this.type);
    }

    sound() {
        console.log('Hello!');
    }
}

class LazyAnimal extends Animal {
    constructor(type, name) {
        super(type, name);

        this.lazy = true;
    }

    sound() {
        console.log('Hello! My name is ' + this.name);
    }

    getStatus() {
        console.log(`Is it lazy animal - ${this.lazy}`);
    }
}


const Garfield = new LazyAnimal('cat', 'Garfield');

Garfield.getStatus();
Garfield.getType();
Garfield.getName();

module.exports = {
    Animal,
    LazyAnimal,
};
