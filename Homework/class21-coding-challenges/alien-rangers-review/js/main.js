//Arrays

//Create an array of tv shows. Loop through and print each show to the console
let movies = ['Hidden Figures', 'When They See Us', 'The Devil Wears Prada'];

for(let i = 0; i < movies.length; i++){
    console.log(movies[i]);
}

//Create an array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let arr = [1, 2, 3, 4, 5];
let newArr = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        newArr.push(arr[i]);
    }
}

console.log(newArr);

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function lowestAndHighest(arr){
    arr.sort((a, b) => a - b);
    
    let sum = arr[1] + arr[arr.length - 2];

    alert(sum);
}

lowestAndHighest([4, 2, 7, 5, 3, 19]);