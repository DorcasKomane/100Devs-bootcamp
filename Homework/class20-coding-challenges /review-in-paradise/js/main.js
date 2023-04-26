// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood;
favFood = 'bread';
alert(favFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let someVar = 'thisIsAVariable';
alert(someVar.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divideAndMultiply(n1, n2, n3){
    let quotient = n1 / n2;
    let product = quotient * n3;
    alert(product);
}
divideAndMultiply(2, 2, 3);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(num){
    let cubed = Math.cbrt(num);
    console.log(cubed);
}
cubeRoot(9);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function isSummerMonth(m){
    if( m === 'December' || m === 'January' || m === 'February' || m === 'March')
        alert('YAY');
    else alert('Booo');
}
isSummerMonth('May');

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipMultiplesOfFive(num){
    for(let i = 1; i <= num; i++){
        if(i % 5 !== 0)
            console.log(i);
    }
}
skipMultiplesOfFive(13);