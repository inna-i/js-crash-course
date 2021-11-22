class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log('I cannot speak'); 
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    sound() {
        console.log('Meow!');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    sound() {
        return console.log('Woof!');
    }
}

const Tom = new Cat('Tom');
Tom.sound(); // Meow!
const Rex = new Dog('Rex');
Rex.sound(); // Woof!

const animal1 = new Animal('Deno');
animal1.sound();
