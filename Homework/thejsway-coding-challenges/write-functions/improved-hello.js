function sayHello(firstName, lastName){
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
}

let yourFirstName = prompt('Enter your first name:');
let yourLastName = prompt('Enter your last name:');

sayHello(yourFirstName, yourLastName);