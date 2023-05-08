//Program: Multiplication Table

//Version 1 with a For Loop
let number = Number(prompt('Enter number:'));

for(let i = 1; i <= number; i++){
    console.log(i * number);
}

//Version 2 with While Loop 
//let number = Number(prompt('Enter number:'));
let i = 1;

while(i < number && number > 2 && number < 9){
    console.log(i * number);
    i++;
}
