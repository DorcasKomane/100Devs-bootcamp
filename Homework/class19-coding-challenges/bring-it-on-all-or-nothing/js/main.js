// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let boolVal = true;

alert(boolVal);

// Declare a variable, reassign it to your favorite color, and console log the value
let favColor;

favColor = 'red';

console.log(favColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers 
//divided by the fourth. Return the result. Call the function.
function sumOfFirstThree(n1, n2, n3, n4){
    return (n1 + n2 + n3) / n4;
}

sumOfFirstThree(1, 2, 3, 2);

// Create a function that takes in 2 numbers. Console log the first number to the power 
//of the second. Call the function.
function powerUp(n1,n2){
    return Math.pow(n1, n2);
}

powerUp(2,2);


// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. 
//If the boolean is false, console log the string
function isBoolTrue(bool, str){
    if(bool){
        alert(str);
    }else
        console.log(str);
}
isBoolTrue(false, 'Alerting the string.');


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, 
//but if the number is divisible by 3 log "fizz" instead of that number, if the number is 
//divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 
//log "fizzbuzz" instead of that number
function fizzBuzz(num){
    for(let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz');
        }else if(i % 5 === 0){
            console.log('buzz');
        }
        else if(i % 3 === 0){
            console.log('fizz');
        }else
            console.log(i);
    }
}

fizzBuzz(21);