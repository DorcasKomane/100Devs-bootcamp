//Create a function that takes in an array of numbers. Return a new array 
//containing every even number from the original array (do not use map or filter)
function returnEvenArray(arr){
    let evenArr = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenArr.push(arr[i]);
        }
    }

    return evenArr;
}

console.log(returnEvenArray([1, 2, 3, 4, 5, 6]));