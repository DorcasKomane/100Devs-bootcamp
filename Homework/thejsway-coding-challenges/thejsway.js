//Program: Following Day
let dayName = prompt('Enter day name:').toLowerCase();

switch(dayName){
    case 'monday':
        console.log('tuesday');
        break;
    case 'tuesday':
        console.log('wednesday');
        break;
    case 'wednesday':
        console.log('thursday');
        break;
    case 'thursday':
        console.log('friday');
        break;
    case 'friday':
        console.log('saturday');
        break;
    case 'saturday':
            console.log('sunday');
            break;
    case 'sunday':
            console.log('monday');
            break;
    default:
        console.log('Not a valid day name.');
}

// Program: Number Comparison
let num1 = Number(prompt('Enter first number'));
let num2 = Number(prompt('Enter second number'));

if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`);
}else if(num1 < num2){
    console.log(`${num1} is less than ${num2}`);
}else 
    console.log(`${num1} is equal to ${num2}`);