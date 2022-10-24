const logErrors = {
    step1: 'Null Pointer Exception',
    step2: 'Success',
    step3: 'Failed',
    step4: 'Failed',
}

const pipelineDetails = {
    step1: true,
    step2: false,
    step3: undefined,
    step4: undefined,
}

let log = ``;
let logStr = '';

for (let key in pipelineDetails) {
    log += `
        ${key} - ${logErrors[key]}, failed - ${pipelineDetails[key]}
    `;

    // logStr += key + ' - ' + logErrors[key] + ', failed -' + pipelineDetails[key];
}


// console.log(log);
// console.log(logStr);

const vars = ['template', 'interpolation', 'function', 'operations'];

const text = `
    Template literals are sometimes informally called ${vars[0]} strings, 
    because they are used most commonly for string ${vars[1]} (to create strings by doing substitution of placeholders). 
    However, a tagged template literal may not result in a string; it can be used with a custom tag ${vars[2]} 
    to perform whatever ${vars[3]} you want on the different parts of the template literal.
`

console.log(text);

const products = [
    {
        name: 'car',
        price: 200000,
    },
    {
        name: 'house',
        price: 2500000,
    }, 
    {
        name: 'park',
        price: 2500000,
    }
];

let productsText = ``;

products.forEach(product => {
    productsText += `
        The product ${product.name} and price is ${product.price};
    `;
});

console.log(productsText)