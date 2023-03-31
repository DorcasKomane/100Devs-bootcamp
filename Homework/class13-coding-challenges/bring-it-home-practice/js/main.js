// *Variables*
// Create a variable and console log the value
let age = 43;

console.log(age);

// Create a variable, add 10 to it, and alert the value

let num;

num = 10;

alert(num);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFourNumbers(num1, num2, num3, num4) {
    let result = num1 - num2 - num3 - num4;
    console.log(result); 
}

subtractFourNumbers(50, 15, 3, 10);


// Create a function that divides one number by another and returns the remainder

function modTwoNumbers(num1, num2) {
    let mod = num1 % num2;
    return mod;
}

console.log(modTwoNumbers(12, 5));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNumbers(num1, num2){
    let sum = num1 + num2;

    if(sum > 50){
        alert('Jumanji');
    }
}

addTwoNumbers(35, 20);

// Create a function that multiplies three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThreeNumbers (num1, num2, num3){
    let product = num1 * num2 * num3;

    if (product % 3 === 0){
        alert('ZEBRA');
    }
}

multiplyThreeNumbers (10, 3, 1);