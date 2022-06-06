const hero = {
    name: 'Hector',
    year: 25,
    city: 'Troy',
    extra: {
        // height: 190,
        weight: 90,
    }
}

// Object.keys(obj) 

const keys = Object.keys(hero);

// console.log(keys);

// if (keys[0] === 'name') {
//     console.log(`Hello, ${hero.name}`);
// } 


// Object.entries(obj)
const entries = Object.entries(hero);

// Object.values(obj)
const values = Object.values(hero);

// console.log(values);

// optional chaining

if(hero?.extra?.height) {
    // console.log(`The height is ${hero.extra.height}`);
}

// old version
if (hero && hero.extra && hero.extra.height) {
    // console.log(`The height is ${hero.extra.height}`);
}

// destructing and spread operator
// dectructing
const { name, city, extra } = hero;
console.log(name, ', ', city, ', ', extra);

// spead
const Paris = {
    ...hero,
    name: 'Paris',
    wife: 'Elena',
}

console.log(Paris)