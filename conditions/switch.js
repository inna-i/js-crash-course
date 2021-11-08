const day = 1;
let weekDay = '';

switch (day) {
    case 1: {
        weekDay = 'Monday';
        return;
        console.log("I am console"); // will not be triggered
    }

    case 2: {
        weekDay = 'Tuesday';
        console.log('Tuesday');
    }
    break;
    
    case 3:
        weekDay = 'Wednesday';

    break;

    default: {
        console.error("You provided the wrong number");
    }
}


console.log('Week day: ', weekDay);
