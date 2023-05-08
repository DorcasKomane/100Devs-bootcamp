//Program: Input Validation

//Version 1
let number = '';

while(number <= 100){
    number = Number(prompt('Enter number:'));
}

//Version 2
//let number = '';

while(number < 50 || number > 100){
    number = Number(prompt('Enter number:'));
}