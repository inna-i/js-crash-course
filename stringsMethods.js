const cars = ['bmw', 'audi', 'vw'];

const CARS = [];
const MATH = {
    sum: (a,b) => a + b,    
};

MATH.divide = (a, b) => a/b;

cars.forEach((item, index) => {
    CARS.push(`${item.toUpperCase()} 197${index}`);
});

// console.log(CARS);

const movies = [
    {
        title: 'Dune',
        director: 'Dany Vilniouv',
    }, {
        title: 'Terminator',
        director: 'James Cameron',
    }, {
        title: 'Star Wars',
        director: 'Jorge Lukas',
    }
];

function checkMovieStatus(moviesArray, movieTitle) {
    return moviesArray.filter((movie) => movie.title.includes(movieTitle))
}

// console.log(checkMovieStatus(movies, 'Dune'));
// console.log(checkMovieStatus(movies, 'Star'));
// console.log('JavaScript'.includes('Javac'));


function getCatName(color) {
    switch(color) {
        case 'grey':
            return 'Felix';   
            console.log('Recommended name is Felix'); // msg will not be printed
        case 'white':
            console.log('Recommended name is Tom');
            return 'Tom';
        default: {
            console.log('Recommended name is any');
        }
    }
}
// console.log(getCatName('grey'));

function calc(a, b, c, isSum) {
    if (typeof c === "number") {
        return a * b * c;
    }

    if (isSum) {
        return a + b;
    }

    return a * b;
}
const result = calc(1, 3, '3', null);
// const result = calc(1, 3);

console.log('result ', result);

