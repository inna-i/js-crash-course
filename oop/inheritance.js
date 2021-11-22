function Car(model) {
  this.model = model;

  this.getModel = () => this.model;
  this.drive = () => console.log("Driving....");
}

const BMW = new Car("BMW");
const Volvo = new Car("Volvo");

BMW.drive(); // Driving...
Volvo.drive(); // Driving...

console.log(typeof Car);
console.log(Volvo instanceof Car);
