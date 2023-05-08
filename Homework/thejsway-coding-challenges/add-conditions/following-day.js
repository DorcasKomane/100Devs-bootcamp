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