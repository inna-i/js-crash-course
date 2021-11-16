const movies = [{
    name: 'LoTR',
    genre: 'comics',
}, {
    name: 'Star Wars',
    genre: 'Sci-Fi'
}, {
    name: 'Dark Knight',
    genre: 'comics',
}];

movies.reduce((prev, cur) => {
    // console.log(arguments)
    prev.push(cur.name);

    console.log({ prev, cur});

    return prev;
}, []);

movies.map(function(arrayElement, index, input) {
    console.log(arguments);
})


movies.sort(() => {}).filter(() => {})