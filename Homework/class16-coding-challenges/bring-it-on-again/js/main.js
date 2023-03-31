// *Variables*
// Declare a variable, assign it a value, and alert the value
let someVariable = 'This is some variable';
alert(someVariable);

// Create a variable, divide it by 10, and console log the value
let anotherVariable = 5;
anotherVariable /= 10;
console.log(anotherVariable); 

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multipyThreeNumbers(num1, num2, num3){
    let product = num1 * num2 * num3;
    alert(product);
}

multipyThreeNumbers(3, 2, 5);
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addTwoSubtractTwo(num1, num2, num3, num4){
    let result = (num1 + num2) - num3 - num4;
    console.log(result);
}

addTwoSubtractTwo(10, 5, 3, 4);

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function someFunction(num1, num2, num3){
    let start = 100;
    let value = start + num1 - num2 / num3;

    if(value > 25){
        console.log('WE HAVE A WINNA');
    }
}

someFunction(10, 12, 5);

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfTheWeek(day){
    if(day.toLowerCase() === 'weekend'){
        alert('weekend');
    }else{
        alert('week day');
    }
}

dayOfTheWeek('WEEKEND');

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function logValues(num){
    for(let i = 1; i <= num; i++){
        console.log(i);
        i += 2;
    }
}

logValues(10);