function Car(model, year) {
  this.model = model;
  this.year = year;

  this.getModel = () => this.model;
  // this.getYear = () => this.year;
  
  // this.drive = () => console.log(`${this.model} is driving....`);
  // this.stopEngine = () => console.log(`${this.model}'s engine is stopped.`);
}

Car.prototype.getYear = function() {
  console.log(this.year);
}

Car.prototype.drive = function() {
   console.log(`${this.model} is driving....`);
}

Car.prototype.stopEngine = function() {
  console.log(`${this.model}'s engine is stopped.`);
}

const BMW = new Car("BMW", 2018);
const Volvo = new Car("Volvo", 2021);

BMW.drive(); // Driving...
Volvo.drive(); // Driving...

Volvo.stopEngine();

console.log(Volvo.getYear())

// console.log(typeof Car);
// console.log(Volvo instanceof Car);


// Volvo -> Car (getDrive ?) -> prototype (getDrive ?)
