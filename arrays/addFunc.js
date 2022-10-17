function add(el, arr) {
    return arr.push(el);
}

function addNums(el, arr) {
    if (Number.isInteger(el)) {
        return arr.push(el);
    }

    return;
}

const data = new Array();

add(1, data);
add('text', data);
add({ n: 1 }, data);

console.log('result ', data);

const onlyNums = new Array();

addNums(1, onlyNums);
addNums('text', onlyNums);
addNums({ n: 1 }, onlyNums);
addNums(110, onlyNums);

console.log('result onlyNums ', onlyNums);