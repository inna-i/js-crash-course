const nums = [-2, -1, 0, 1, 2, 3, 4, 5, 6];
const nums2 = [-2, -1, 0, 100, 1000, 10000];

const movies = [{
    name: 'The Lord of the Rings',
    genre: 'fantasy',
}, {
    name: 'Star Wars',
    genre: 'sci-fi'
}, {
    name: 'Dark Knight',
    genre: 'comics',
}, {
    name: 'Joker',
    genre: 'comics',
}];


/* ============================ MAP ========================= */
const increaseNum = (num) => {
    if (num <= 0) {
      return 10;
    }
   
    return num + 10;
}

// using map we will increase every element
const updatedNums = nums.map(increaseNum);
const updatedNums2 = nums2.map(increaseNum);
  
// question during lesson
const increaseNumByValue = (num, value) => {
    if (num <= 0) {
        return value;
    }

    return num + value;
}
const updatedNumsByValue = nums.map(num => increaseNumByValue(num, 10));


/* ============================ FILTER ========================= */

const without10 = updatedNums.filter(num => num > 10);
// console.log('filterd nums  ', without10);

const selectedMovies = movies.filter(movie => {
    console.log(movie)
    return movie.genre === 'comics';
});
// console.log(selectedMovies);

/* ============================ REDUCE ========================= */

const words = ['May', 'the', 'Force', 'be', 'with', 'you'];

const strResult = words.reduce(
    (acc, currentWord) => acc += currentWord + ' ',
    ''
);

function getSum(nums) {
    return nums.reduce((acc, n) => acc += n, 0);
}

const sumResult = getSum([10, 30, 10]); // 50
// console.log(result);

const updatedMovies = movies.reduce(
    (acc, currentMovie, index) => {
        console.log({acc, currentMovie, index});
        if (currentMovie.genre == 'comics'){
            acc.push({ ...currentMovie, year: '200' + index });
        }

        return acc;
    },
    [],
);
// example with filter().map() combination
// const updatedMovies = movies
//     .filter(movie => movie.genre === 'comics')
//     .map((movie, index) => ({ ...movie, year: '200' + index }));

console.log(updatedMovies);

/* ============================ JOIN, INCLUDES, FIND ========================= */

// join words
const sentence = words.join(', ');

// console.log('Joined words - ', sentence);

const str = 'test-error';
const hasCat =  str.includes('cat');
const hasForce = words.includes('Force');

// console.log('Includes ', shasCat);
// console.log('Includes in array ', hasForce);

const LOTR = movies.find(movie => movie.name === 'The Lord of the Rings');

/* ============================ SPLICE ========================= */

const months = ['Jan', 'March', 'April', 'June', 'August'];
 
months.splice(1, 0, 'Feb');

months.splice(5, 0, 'July');
 
// inserts at index 1
console.log(months);

// console.log(strResult);