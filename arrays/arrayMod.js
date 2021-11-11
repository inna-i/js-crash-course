const cars = [];

cars.push('BMW');

cars[cars.length] = 'Audi';

cars.push({
    company: 'VW',
    year: 1920,
});

cars.push('Volvo');

console.log(cars);