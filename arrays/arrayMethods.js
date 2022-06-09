const nums = [1, 2, 3, 4, 5, 6];

const newNums = nums.map((arrayElement, index) => {
    // console.log({ arrayElement, index });

    return arrayElement + 10;
});

const movies = [{
    name: 'The Lord of the Rings',
    genre: 'fantasy',
}, {
    name: 'Star Wars',
    genre: 'sci-fi'
}, {
    name: 'Dark Knight',
    genre: 'comics',
}];

const newMovies = movies.reduce((acc, currMovie, index) => {
    if (currMovie.genre === 'comics') {
        acc.push({
            ...currMovie,
            year: '200' + index,
        });
    }
    
    // console.log({ acc, currMovie, index });
    return acc;
}, []);


console.log(' -------------- newMovies ----------------------- ');
// console.log(' newMovies ', newMovies);

const words = ['May', 'the', 'Force', 'be', 'with', 'you'];

// join words
const sentence = words.join(', ');

console.log('Joined words - ', sentence);

const str = 'test-error';

console.log('Includes ', str.includes('cat'));
console.log('Includes in array ', words.includes('Force'));
