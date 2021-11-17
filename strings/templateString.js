const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';
const hasWord = sentence.includes(word); // true
const hasCatWord = sentence.includes('cat'); // false


console.log(`The word ${word} ${hasWord ? 'is' : 'is not'} in the sentence`);
// output: 'The word "fox" is in the sentence'


const beasts = 'Beasts list: ant, lison, camel, duck, bison';

const beastsArray = beasts.split(' ');
// console.log(beastsArray.indexOf('b'));

// console.log(beasts.indexOf('bison'));
// // output: 18

// console.log(beasts.indexOf('tiger'));
// output: -1


const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31));
// // output: "the lazy dog."

// console.log(str.slice(4, 19));
// // output: "quick brown fox"

// console.log(str.slice(-6));
// // output: "dog."

// console.log(str.slice(-9, -5));
// output: "lazy"

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[a-z]/g;
const found = paragraph.match(regex);

// console.log(found);
// output: Array ["T", "I"]

const p = 'The quick brown fox jumps over the lazy dog';
const p1 = 'The quick brown dog jumps over the lazy dog';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey."


const dogRegex = /dog/g;
console.log(p1.replace(dogRegex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret."


const user = {
    userName: 'Tony',
    age: 110,
}

// const t = name => name;

const { userName, age } = user;

console.log(
    `The user name is ${userName} and he is ${age} years old`
);