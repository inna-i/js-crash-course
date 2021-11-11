const letters = ['a', 'b', 'c', 'd' ];
const config = {
    module: 'HeartBeat',
    counter: 0,
    testType: 'apiTests',
};

function printLetter(letter) {
    console.log(' Letter is ', letter);
}

const [ first, second, third ] = letters;

// printLetter(first);

function runTests(testConfig) {
    const { module, testType, count = 1 } = testConfig;

    console.log('Counter is ', count);
    console.log(`Tests with type ${testType} are triggerd and module in use ${module}`);
}

// runTests(config);

function mergeObject(obj1, obj2) {
    // return Object.assign({}, obj1, obj2);
    return {
        ...obj1,
        ...obj2,
    }
}

const newObj = mergeObject(config, { status: 'done' });

console.log('global config ', config);
console.log(newObj);
