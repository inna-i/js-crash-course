const words = ["you", "with", "be", "Force", "the", "May"];
let sentence = "";

// in the loop we will find a sum of nums array items
for (let i = words.length - 1; i >= 0; i--) {
  sentence += words[i] + " ";
}

// console.log(sentence);

for (let index in words) {
  // console.log(words[index]);
}

const obj = {
  one: "1",
  two: "2",
  three: "3",
};
let str = "";
const result = [];

// in the loop we will find a sum of nums array items
for (let key in obj) {
  str += obj[key] + "; ";
  result.push(Number(obj[key]));
}

const result2 = Object.values(obj);

// console.log({ result, result2, str });

let n = 0;
let sum = 0;

while (n < 3) {
  // console.log(n);

  sum += n;
  n++;
}

// console.log('sum ', sum);

const matrix = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    // console.log(matrix[i][j]);
  }
}

let counter = 3;
let factorial = 1;

// with the loop we will find n!
do {
  factorial *= counter;
  counter--;
} while (counter >= 1);

// console.log('n! ', factorial);

const data = [
  { user: "John" },
  { user: "Tom" },
  { user: "Petr" },
  { user: "Ivan" },
  { user: "Dmytro" },
];

// use data
function greeting(userName) {
  return "Hello, " + userName + "!";
}

for (let i = 0; i < data.length; i++) {
  greeting(data[i].user);
}

const song = {
  1: "Venom, (I got that) adrenaline momentum",
  2: "And I'm not knowin' when I'm",
  3: "Ever gonna slow up and I'm",
  4: "Ready to snap any moment I'm",
  5: "Thinkin' it's time to go get 'em",
  6: "They ain't gonna know what hit 'em",
  7: "(W-W-When they get bit with the—)",
  8: "Venom, (I got that) adrenaline momentum",
  9: "And I'm not knowin' when I'm",
  10: "Ever gonna slow up and I'm",
  11: "Ready to snap any moment I'm",
  12: "Thinkin' it's time to go get 'em",
  13: "They ain't gonna know what hit 'em",
};

let songText = "";

for (let key in song) {
  songText += song[key];
//   console.log(song[key]);
}

const emptyArray = [1];

for(let i = 0; i < emptyArray.length; i++) {
    console.log('Hello from for loop ');
}
