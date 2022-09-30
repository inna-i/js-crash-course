const day = 5;
let weekDay = '';

switch (day) {
    case 'one':
    case '1':
    case 1: {
        weekDay = 'Monday';
    }
    break;

    case '2':
    case 2: {
        weekDay = 'Tuesday';
    }
    break;
    
    case '3': {
        weekDay = 'Wednesday';
    }
    break;

    case '5':
    case 'five':
    case 5: {
        weekDay = 'Friday';
    }
    break;

    default: {
        weekDay = 'not defined day'
        console.error("You provided the wrong number");
    }
}

console.log('Today is ', weekDay);


