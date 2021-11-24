const Utils = {
    UI: {
        unitTest: {
            validate: (val) => console.log(val),
        },
        e2e: {
            validate: (val) => console.log(val),
            utils: {
                match: (val, pattern) => console.log({ val, pattern }),
                check: (val) => 'Check value ' + val,
            }
        },
    },
    API: {
        unitTest: {
            validate: (val) => console.log(val),
            utils: {
                match: (val, pattern) => console.log({ val, pattern }),
            }
        },
        acceptenceTest: {
            validate: (val) => console.log(val),
            config: {
                version: '1.10.11',
                os: 'Linux',
                ci: 'Jenkins',
            }
        }
    }
}

Utils.UI.e2e.validate('Validate e2e tests....');

// Utils.UI.e2e.utils.match('test', '[a-Z]');

Utils.API.unitTest.utils.match('test', '[0-9]');

const version = Utils.API.acceptenceTest.config.version;

/**
 * runc compares versions
 * @param {String} version
 * @returns String
 */
function compareVersion(vers) {
    const isLatestVersion = vers === Utils.API.acceptenceTest.config.version;

    return isLatestVersion ? 'You have correct version' : 'Your version is outdated';
}
// console.log(compareVersion('1.0.10'));

/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns Number
 */
function comparator(a, b) {
    if (a < b) {
        return -1;
    }

    return 1;
}
const sortedArray = [8, 9, 2, 3, 1].sort(comparator);

console.log(sortedArray);

/**
 * 
 * @param {Object} obj1 
 * @param {Object} obj2 
 * @returns Boolean
 */
function namesComparator(obj1, obj2) {
    return obj1.name.localeCompare(obj2.name, 'en', { sensitivity: 'base' });
}


const res = [ { name: 'Apple' }, { name: 'test'}, { name: 'age' }, { name: 'hello'}].sort(namesComparator);

console.log(res);

function clickBtn(selector) {
    document.querySelector(selector).click();
}

function selectElements(selector) {
    return document.querySelectorAll(selector);
}

function step1() {
    clickBtn('#submit');
    checkPayload()
}

function step2() {
    clickBtn('.menu');
    selectElements('.menu__item');

}

function step3(value, pattern) {
    const match = Utils.e2e.utils.match(value, pattern);

    if (match) {
        Utils.e2e.validate(value);
    }
}


