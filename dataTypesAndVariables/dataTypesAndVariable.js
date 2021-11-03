// primitive

const one = 1;
const ONE = "1";
const name = "Ivan";

let varShouldBeUpdated = null;

const a = 'a';
const A = 'A';

let temp = undefined;

const obj = {
    a: 1,
    name: 'Test',
}

const ar = [];

// console.log(one);
// console.log('It is name variale ', name);

const res = one == ONE;
const res2 = one === ONE;

// console.log('Result: ', res);
// console.log('Result with data types check: ', res2);
console.log('first version ', varShouldBeUpdated == null);

varShouldBeUpdated = 101;

// console.log('rewrite ',  typeof varShouldBeUpdated);
console.info('rewrite ',  typeof varShouldBeUpdated);


