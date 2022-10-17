const words = ['May', 'the', 'Force', 'be', 'with', 'you'];

let sentence = '';
let n = 0;

// with the loop we will find a sum of numbers in the array
while (n < words.length) {
  sentence += words[n] + ' ';
  n++;
}

// console.log(sentence);

const reversedWords = ['you', 'with', 'be', 'Force', 'the', 'May'];
let revSentences = '';
let i = words.length - 2;

while (i >= 0 ) {
    revSentences += reversedWords[i] + ' ';
    i--;
}
  
// console.log('reverse ', revSentences);
  

let fact = 5;
let result = 1;

// with the loop we will find n!
do {
  result *= fact;
  fact--;
} while (fact >= 1)
  
console.log(result);


