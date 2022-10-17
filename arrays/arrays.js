const movies = [
  {
    name: "The Lord of the Rings",
    genre: "fantasy",
  },
  {
    name: "Star Wars",
    genre: "sci-fi",
  },
  {
    name: "Interstellar",
    genre: "sci-fi",
  },
  {
    name: "Dark Knight",
    genre: "comics",
  },
];

// sort()
const sortedMovies = movies.sort((nextMovie, prevMovie) => {
  // console.log(arguments);

  return nextMovie.name.localeCompare(prevMovie.name);
});

const sortedNums = [110, 33, 33, 3, 10001].sort((nextNum, prevNum) => {
  // console.log(nextNum, prevNum);

  return nextNum - prevNum;
});

const getFilteredMovies = (movs, conditionValue) =>
  movs.filter((movie) => {
    return movie.genre === conditionValue;
  });

// Big O - O(n) vs O(n*n)
// filter() - O(4)
// filer() + indefOf() - O(4*4)

// filter().map() vs reduce()

const updateMovies = getFilteredMovies(movies, "fantasy").map((mov, index) => ({
  ...mov,
  id: `mov-${index}`,
}));

const updateMoviesFast = movies.reduce((acc, mov, index) => {
  if (mov.genre === "sci-fi") {

    acc.push({
      ...mov,
      id: `mov-${index}`,
    });
  }

  return acc;
}, []);

// console.log(updateMovies);

// n * n
const nums = [1000, 33, 101, 55];

const updated = nums.map(n => {
    const index = nums.indexOf(n);

    return n + index;
});

// n * n
for(let i=0; i > nums.length; i++) {
    const index = nums.indexOf(nums[i]);

    // ...
}


const numbers = [1, 2, 3, 4, 5];

numbers.push(6, 7, 8);

// console.log('after push ', numbers);

numbers.pop();
// console.log('after pop ', numbers);

numbers.unshift(0);
// console.log('after unshift ', numbers);
// index 0  1  2  3  4  5  6  7
//      [0, 1, 2, 3, 4, 5, 6, 7]

// console.log('el with index 5 ', numbers[5]);

numbers.shift()
// console.log('after shift ', numbers);

const hello = ['Hello'];
const world = ['world!'];

const result = hello.concat(world);

// console.log(result);

const result2 = [...hello, ...world];
// console.log(result2);

// destruction
const [el1, el2, el3] = result2;

// console.log('el1 ', el1);
// console.log('el2 ', el2);

const obj = {
  cat: 'Tom',
  dog: 'Thor',
}

const { cat, dog } = obj;

// console.log(cat, ' and ', dog);

	
function swap(arr, i, j) {
  // change places of array elements
  // [arr[i], arr[j]] = [arr[j], arr[i]];

  const temp = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;
}

const nums1 = [3, 2, 1];

swap(nums1, 0, 2);

// console.log(nums1)

const elms = [1, 2, 3];

elms[elms.length] = 100;

console.log('elm 3 ', elms[3]);
// console.log('elm 50 ', elms[50]);
// console.log('elm 10 ', elms[10]);
