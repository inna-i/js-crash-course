function canIMakeCake(obj1, obj2) {
    const result = {};
    let canIMake = true;
    let max = Infinity;
    let missedIngredient = 'All good';

    for (let ingredient in obj1) {    
        if (obj2[ingredient] === 0) {
            result[ingredient] = 0;
            canIMake = false;
            missedIngredient = ingredient;

        } else if(obj2[ingredient]) {
            const amount = parseInt(obj2[ingredient]/obj1[ingredient]);
            result[ingredient] = amount;

            if (max > amount) {
                max = amount;
            }
        }
    }

    if (!canIMake) {
        max = 0;
    }

    return { canIMake, max, missedIngredient, result};
}

console.log(canIMakeCake(
    {flour: 500, sugar: 200, eggs: 2}, 
    {flour: 1200, sugar: 1200, eggs: 2, milk: 200},
));
