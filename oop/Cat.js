class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        console.log(this.name +  " is running");
    }

    sound() {
        console.log("Meow! Meow!");
    }

    getColor() {
        return this.color;
    }
}

class LazyCat extends Cat {
    constructor(name, color) {
        super(name, color);
    }

    run() {
        console.log(this.name + ' is too lazy to run');
    }    
}

const Felix = new Cat("Felix", "white");
Felix.run();
// console.log(Felix.getColor());

const Garfield = new LazyCat("Garfield", "red");
Garfield.run();
