class Animal {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  
    // Method
    sayHello() {
      return "Hello! My name is " + this.name + " and I am a " + this.type;
    }

    makeSound(sound) {
      return `${sound}! ${sound}!`;
    }
}
  
// cat 
const Cat = new Animal("Felix", "cat");
// call a method
console.log(Cat.sayHello());
console.log(Cat.makeSound("Meow"));

// dog 
const Dog = new Animal("Beethoven", "dog");
// call a method
console.log(Dog.sayHello());
console.log(Cat.makeSound("Woof"));