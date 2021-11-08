class Animal {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  
    // Method
    sayHello() {
      return "Hello! My name is " + this.name + " and I am a " + this.type;
    }
}
  
// cat 
const Cat = new Animal("Felix", "cat");
// call a method
console.log(Cat.sayHello());

// dog 
const Dog = new Animal("Beethoven", "dog");
// call a method
console.log(Dog.sayHello());