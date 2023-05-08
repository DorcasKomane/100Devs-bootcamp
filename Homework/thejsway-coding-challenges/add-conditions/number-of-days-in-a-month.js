// Program: Number of days in a month

let month = Number(prompt('Enter month number:'));

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`There are 31 days in the ${month}th of the year.`);
        break;
    case 2:
        console.log(`There are 29 days in the ${month}nd month of the year, and 28 days during leap year.`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`There are 30 days in the ${month}th of the year.`);
        break;
    default:
        console.log('Invalid input');
}