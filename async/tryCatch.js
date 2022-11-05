try {
    // throw new Error('oops');
    console.log('Hello from try!'); 
} catch (ex) {
    console.error('inner', ex.message);
} finally {
    console.log('finally');
}

try {
    // throw new Error('oops');
    console.log('Hello from try!'); 
} catch (ex) {
    console.error('inner', ex.message);
}