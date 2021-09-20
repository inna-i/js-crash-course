/*------------------------------ */
/*********************************/
/**  Tasks with functions  **/
/*********************************/
/*------------------------------ */

// Task 1 - should return the string "Hello, World!"
function sayHelloWorld() {
  return "Hello, World!";
}

// Task 2 - should return the string "Hello, Somename!"
function sayHello(name) {
  return `Hello, ${name}!`;
}

// Task 3 - should return sum of two numbers
// a + b
function sumNumbers(a, b) {
  return a + b;
}

// Task 4 - should return a value by key in provided object
// provided object - { name: 'Name' }
// result - 'Name'
function valueByKeyInObject(key, obj = {}) {
  return obj[key];
}

// Task 5 - should return an object with new field and value
// without object - { name: 'Name' }
// with an object - { name: 'Name', age: 100 }
function extendObject(key, value, obj = {}) {
  return {
    ...obj,
    [key]: value,
  };
}

// Task 6 - should return a larger argument increased by 100
// with (10, 7) output - 110
// with (10, 77) output - 177
function increaseBiggerArg(a, b) {
  return a > b ? a + 100 : b + 100;
}

// Task 7 - calculate the area of a figure using
// provided type: "square", "circle", or "rectangle"
// for circle "a" is radius
// for square only "a" needed
function calculateFigureArea(figureType, a, b) {
  switch (figureType) {
    case "square":
      return a * a;
    case "rectangle":
      return a * b;
    case "circle":
      return Math.PI * a * a;

    default:
      console.log(
        `Sorry, we cannot calculate area of this figure ${figureType}`
      );
  }
}

/*------------------------------ */
/*********************************/
/**  Tasks with Loops  **/
/*********************************/
/*------------------------------ */

// Task 1 - find sum of all number in 2 arrays
// const arrayNums1 = [7,101,3,1,9,11,100,111] // 343
// const arrayNums2 = [90,101,3,1,69,11,10,111] // 396
// 343 + 396
function sumNumsInArrays(array1, array2) {
  const len = array1.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    sum += array1[i] + array2[i];
  }

  return sum;
}

// Task 2 - Using a 'for' loop print all even
// numbers up to and including n, as a comma separated string.
// Don’t include 0
// const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"

function printEvenNumbers(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }

  return arr.join(", ");
}

// Task 3 - Using a 'for' loop output the elements in reverse order
// const arr = [
//   43, "what", 9, true, "cannot", false, "be", 3, true
// ];
function reverseArrayItems(array) {
  let revArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    revArr.push(array[i]);
  }
  return revArr;

  // Using Divide and conquer algorithm
  // for (let i = 0; i < Math.floor(array.length / 2); i++) {
  //   if (i !== array.length - i - 1) {
  //     [array[i], array[array.length - i - 1]] = [
  //       array[array.length - i - 1],
  //       array[i]
  //     ];
  //   }
  // }
  // return array;
}

// Task 4 - Add up each element in the same position and
// create a new array containing the sum of each pair.
// Assume both arrays are of the same length.
// let array1   = [4, 6, 7];
// let array2  = [8, 1, 9];
// Example output:
// [12, 7, 16]
function sumNumsSamePosition(array1, array2) {
  let sum = [];

  for (let i = 0; i < array1.length; i++) {
    sum[i] = array1[i] + array2[i];
  }

  return sum;
}

// Task 5 - find sum of all number in array using 'while' loop
function sumNums(array) {
  let i = 0;
  let sum = 0;

  while (i < array.length) {
    sum += array[i];
    i++;
  }

  return sum;
}

// Task 6 - filter array of string using 'for' or 'while' loop
// and keep only elements where length > 4 and without the word 'error'
// const strArr = ['error01', 'in a galaxy', 'start-error', far far', 'away', '0994-error']
function filterArrayWithStrings(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 4 && !array[i].includes("error")) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// Task 7 - given a number n calculate the factorial of
// the number using 'for' or 'while' loop
// n! => 1*2*3*4*5
function factorial(n) {
  let result = 1;

  if (n <= 1) {
    return result;
  }

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

/*------------------------------ */
/*********************************/
/*   Tasks with Array methods   */
/*********************************/
/*------------------------------ */

// Task 1 - sort an array with numbers
// const arrayNums = [7,101,3,1,9,11,100,111]
function sortArray(array) {
  return array.sort((a, b) => a - b);
}

// Task 2 - filter an array of strings and keep only
// a string, that doesn't contain the word 'test'
// const stringsArray = [
//   'one-test', 'cat', 'parrot',
//   'banana', 'test-dog', 'dog'
// ]
function filterStringsArray(array) {
  return array.filter((item) => !item.includes("test"));
}

// Task 3 - find sum of numbers in array using .reduce()
// const numsArray = [
//   1, 3, 5, 10, 19, 100, 200, 33,
// ]
function sumNumbersInArray(array) {
  return array.reduce((acc, cur) => acc + cur, 0);
}

// Task 4 - filter items, where a > 5 and extend with
// new field *sum* with value a + b
// const arrayItems = [
//   { a: 1, b: 3 },
//   { a: 3, b: 3 },
//   { a: 6, b: 3 },
//   { a: 10, b: 10 },
//   { a: 41, b: 1 },
//   { a: 0, b: 4 }
// ];

function filterAndExtendArrayItems(array) {
  return array.reduce(function (acc, cur) {
    if (cur.a > 5) {
      acc.push({
        ...cur,
        sum: cur.a + cur.b,
      });
    }

    return acc;
  }, []);
}

// Task 5 - merge arrays and remove duplicates
// const arNum = [1, 2, 3, 4, 5, 6];
// const arNum2 = [15, 6, 3, 20, 11];
function mergeArraysWithoutDuplicates(array1, array2) {
  return array1.concat(array2).reduce(function (acc, cur) {
    if (acc.indexOf(cur) === -1) {
      acc.push(cur);
    }

    return acc;
  }, []);
}

/*------------------------------ */
/*********************************/
/*   Tasks with Strings   */
/*********************************/
/*------------------------------ */

// Tasks 1 -  convert array of strings
// from lowercase to uppercase
function convertToUppercase(array) {
  return array.map((item) => item.toUpperCase());
}

// Task 2 - should calculate amount of provided letter in
// the provided string
// ('letter', 't') => 2
function calculateLetters(string, letter) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) count++;
  }

  return count;
}

// Task 3 - replace numbers with spaces
// in the provided string
// 'I9like5JS' => 'I like JS'
function replaceNumbers(string) {
  return string.replace(/[0-9]/gi, " ");
}

// Task 4 - sort strings in array
function sortStringArray(array) {
  return array.sort((a, b) => a.localeCompare(b));
}

// Task 5 - return a new string that should contain
// a letter taken by index argument from every string in array
// if index is bigger than string length - add space instead
// array - ["osmos", "uterque", "water", "crop",
//         "&", "swap", "cat", "brew", "Esmeralda"]
// index - 1
// result "start wars"
function buildStringUsingIndex(array, index) {
  let str = "";

  array.forEach(function (item) {
    str += item.length > index ? item.charAt(index) : " ";
  });

  return str;
}

// Tasks 6 - check, if string is palindrome
// and return "The string is palindrome"
// or "The string is not palindrome"
function palindromeValidator(str) {
    const len = str.length - 1;

    for (let i = 0; i < Math.floor(str.length) / 2; i++) {
        if (!(str[i] === str[len - i])) {
            return "The string is not palindrome";
        }
    }

    return "The string is palindrome";
}
