// //Program: Following Day
// let dayName = prompt('Enter day name:').toLowerCase();

// switch(dayName){
//     case 'monday':
//         console.log('tuesday');
//         break;
//     case 'tuesday':
//         console.log('wednesday');
//         break;
//     case 'wednesday':
//         console.log('thursday');
//         break;
//     case 'thursday':
//         console.log('friday');
//         break;
//     case 'friday':
//         console.log('saturday');
//         break;
//     case 'saturday':
//             console.log('sunday');
//             break;
//     case 'sunday':
//             console.log('monday');
//             break;
//     default:
//         console.log('Not a valid day name.');
// }

// // Program: Number Comparison
// let num1 = Number(prompt('Enter first number'));
// let num2 = Number(prompt('Enter second number'));

// if(num1 > num2){
//     console.log(`${num1} is greater than ${num2}`);
// }else if(num1 < num2){
//     console.log(`${num1} is less than ${num2}`);
// }else 
//     console.log(`${num1} is equal to ${num2}`);



// //Program: Number of days in a month
// let month = Number(prompt('Enter month number:'));

// switch(month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log(`There are 31 days in the ${month}th of the year.`);
//         break;
//     case 2:
//         console.log(`There are 29 days in the ${month}nd month of the year, and 28 days during leap year.`);
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log(`There are 30 days in the ${month}th of the year.`);
//         break;
//     default:
//         console.log('Invalid input');
// }


// //Program: Following Second
// let hours = Number(prompt('Enter hours:'));
// let minutes = Number(prompt('Enter minutes:'));
// let seconds = Number(prompt('Enter seconds:'));

// if((hours === 23 && minutes === 59 && seconds === 59)){
//     hours = 00;
// }else if((hours < 23 && minutes === 59 && seconds === 59)){
//     hours++;
// }else hours = hours;
    
// if(minutes === 59 && seconds === 59){
//     minutes = 00;
// }else 
//     minutes ++;

// if(seconds === 59){
//     seconds = 00;
// }else 
//     seconds++;

// console.log(`Time in the following second will be: ${hours}h${minutes}m${seconds}s`);


//Program: Carousel

//Version 1
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

//Version 2
let numberOfTurns = Number(prompt('Enter number of turns:'));

for(let i = 1; i <= numberOfTurns; i++) {
    console.log(i);
}


