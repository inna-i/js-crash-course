const Marvel = {
    yearCreation: 1939,
    mainCharacter: 'Spider Man',
    mainTeam: 'Avengers',
};

const DC = {
    yearCreation: 2013,
    mainCharacter: 'Batman',
    mainTeam: 'Justice League',
};

if (DC.yearCreation !== 1934) {
    // DC.yearCreation = 1934;
    DC['yearCreation'] = 1934;
}

const ownerField = 'owner';
Marvel[ownerField] = 'Disney';

// hasOwnproperty
if (!DC.hasOwnProperty('owner')) {
    DC[ownerField] = 'Warner Brothers';
}

Object.freeze(DC);

DC.yearCreation = 2021;

// console.log(Object.isExtensible(DC));

const MarvelKiller = Object.assign({}, Marvel);
MarvelKiller.better = true;

console.log(MarvelKiller);





