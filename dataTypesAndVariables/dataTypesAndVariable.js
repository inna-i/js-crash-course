// primitive
const one = 1;
const ONE = "1";
const extra = 100;
const name = "Ivan";

let result = 0;
/* console.log('before - ', result);

result = one + extra;

// console.log('after - ', result);

result = result + 200;

// console.log('after + 200 - ', result);

var result2 = 0;
result2 = result + 500;
*/

let varShouldBeUpdated = null;

const a = 'a';
const A = 'A';

let temp = undefined;

const obj = {
    a: 1,
    name: 'Test',
}

const arrayOfNums = [10, 20];

// console.log(one);
// console.log('It is name variale ', name);

const res1 = one == ONE;
const res2 = one === ONE;

const isTrue = true; // boolean
const isFalse = false; // boolean

console.log('Result with == : ', res1);
console.log('Result with data types check: ', res2);
// console.log('first version ', varShouldBeUpdated == null);

// varShouldBeUpdated = 101;

// console.log('rewrite ',  typeof varShouldBeUpdated);
// console.info('rewrite ',  typeof varShouldBeUpdated);

let errorMsg = 'Number is wrong';

// console.error(errorMsg);

	
// strings operations
let firstName = "John";
let lastName = "Doe";

// const greatings = "Hello, " + firstName + " " + lastName + "!";
// console.log(greatings);

let greatings = '';

// greatings = greatings + "Hello, ";
greatings += 'Hello, ';
greatings += firstName + ' ';
greatings += lastName + '!';

console.log(greatings);




