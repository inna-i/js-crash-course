// Dog object
const dog = {
    name: 'Teddy', // property
    age: 3,
    hasHotDog: false,
    speak: () => console.log("Woof!"), // method
    extra2: {
        likesIceCream: 'yes',
        extra3: {
            num: 3,
        }
    }
}


// dog.color = 'beige';
dog['color'] = 'beige';

Object.freeze(dog);

// console.log(dog.color);

// dog['likesIceCream'] = false;
// console.log(dog.hasOwnProperty('color2'));

if(dog?.extra?.likesIceCream === 'yes') {
    console.log('The dog likes ice cream');
}
// console.log("The Dog name is ", dog.name, " and he is ", dog.color);

// console.log("The Dog age is ", dog.age);

if (dog.hasHotDog) {
   console.log("The Dog has Hot Dog");
}


// const dog2 = Object.assign({}, dog);
const dog2 = {
    ...dog,
    name: 'Lessy',
}

let dog3 = dog;
// dog2.name = "Lessy";


// dog2 = {
//     itsCat: true,
//     name: "Tom",
// }

console.log(dog3);

dog3 = {
    itsCat: true,
    name: "Tom",
    color: 'black'
}

console.log(dog3)

Object.defineProperty(dog3, "color", { configurable: false, writable: false });

dog3.color = 'white';