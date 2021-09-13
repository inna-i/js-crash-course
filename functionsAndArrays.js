const cats = [
    { name: 'Tom'},
    { name: 'Felix' },
    { name: 'Markus' },
    { name: 'Tobie' },
];

const arr = [];

for(let i=0; i < cats.length; i++) {
    arr.push(cats[i].name);
}

const arrMap = cats.map(function(item) {
    return item.name;
});

const arrMapArrow = cats.map((item) => item.name);

// Reduce

const nums = [1000,1,3,'string', false, 5,6,7,10,100];

const minNums = nums.reduce(function(acc, curNum, index) {
    if (curNum >= 10) {
        acc.push(curNum);
    }

    return acc;
}, []);

console.log(`${nums[3]}, ${nums[4]}`);
console.log(' str => ', nums[4]);
console.log(' bool => ', nums[5]);

console.log(arr.concat(arrMap));

console.log(' index 0  - ', arr[0]);
console.log(arr);
console.log('array created with map  ', arrMap);
console.log('array created with map and arrow func  ', arrMapArrow);
console.log(' minNums  - ', minNums);

