// *Variables*
// Declare a variable, reassign it to your fav holiday, 
//make sure it is in all caps, 
//and print the value to the console
let favHoliday;
favHoliday = 'CHRISTMAS';
console.log(favHoliday);

//Declare a variable, 
//assign it a string, 
//alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'This is life';
alert(str.substring(str.length - 3));

// *Functions*
// Create a function that takes in 5 numbers. 
//Subtract all five from 100. 
//Alert the absolute value of the difference. 
//Call the function.
function subtractFromHundred(n1, n2, n3, n4, n5){
    let diff = 100 - n1 - n2 - n3 - n4 - n5;
    alert(Math.abs(diff));
}

subtractFromHundred(10, 20, 334, 4, 5);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowestAndHighest(n1, n2, n3){
    let numbers = [n1, n2, n3];
    
    numbers.sort((a, b) => a - b);

    console.log(numbers[0], numbers[numbers.length - 1]);
}

lowestAndHighest(23, 2, 1)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. 
//Call the function.
function headsOrTails(){
    let random = Math.random();

    if(random < 0.5)
        return 'heads';
    else 
        return 'tails';
}

console.log(headsOrTails());

//*Loops*
//Create a function that takes in a number. 
//Console log the result of heads or tails using the previous function x times where x is the number passed into the function. 
//Call the function.
function headsOrTailsXTimes(x){
    for(let i = 0; i < x; i++){
        console.log(headsOrTails());
    }
}

headsOrTailsXTimes(3);