//Program: Following Second

let hours = Number(prompt('Enter hours:'));
let minutes = Number(prompt('Enter minutes:'));
let seconds = Number(prompt('Enter seconds:'));

if((hours === 23 && minutes === 59 && seconds === 59)){
    hours = 00;
}else if((hours < 23 && minutes === 59 && seconds === 59)){
    hours++;
}else hours = hours;
    
if(minutes === 59 && seconds === 59){
    minutes = 00;
}else 
    minutes ++;

if(seconds === 59){
    seconds = 00;
}else 
    seconds++;

console.log(`Time in the following second will be: ${hours}h${minutes}m${seconds}s`);
