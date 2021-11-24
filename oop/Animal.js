class Animal {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    getName() {
        console.log(this.name);
    }

    sound() {
        console.log('Hello!');
    }
}

class LazyAnimal extends Animal {
    constructor(type, name) {
        super(type, name);
    }

    sound() {
        console.log('Hello! My name is ' + this.name);
    }
}


module.exports = {
    Animal,
    LazyAnimal,
};
