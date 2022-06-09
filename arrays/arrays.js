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