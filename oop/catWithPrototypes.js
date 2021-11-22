function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.run = function () {
  console.log("I’m running");
};

Cat.prototype.sound = function () {
  console.log("Meow! Meow!");
};

const Tom = new Cat("Tom", "grey");
const Simon = new Cat("Simon", "red");
