//Create an array of movie titles. Loop through the array and add each element to the h2.
const movies = ['The Devil Wears Prada', 'Spiderman', 'Redemption'];

for(let i = 0; i < movies.length; i++){
    document.querySelector('h2').innerText += movies[i]; 
}

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let numbers = [1, 2, 3, 4, 5];
let newArray = [];

// for(let i = 0; i < numbers.length; i++){
//     newArray.push(numbers[i] + 3);
// }
// console.log(newArray);

numbers.forEach((item)=>{
    newArray.push(item + 3)
});
console.log(newArray);

//Find the average of all the numbers from question three
