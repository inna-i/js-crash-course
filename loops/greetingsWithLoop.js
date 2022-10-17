	
const data = [
    { user: 'John', isOnline: true },
    { user: 'Tom',  isOnline: false },
    { user: 'Petr', isOnline: false },
    { user: 'Elina', isOnline: true },
    { user: 'Molly',  isOnline: true },
];

// use data
function greeting(userName) {
    return "Hello, " + userName + "!";
}

for (let i = 0; i < data.length; i++) {
    if (data[i].isOnline) {
        console.log(greeting(data[i].user));
    } else {
        console.log(data[i].user, ' is offline');
    }
}