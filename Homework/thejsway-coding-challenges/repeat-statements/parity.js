//Program: Parity

// //Version 1
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`);
    }
 }

// //Version 2
let start = Number(prompt('Enter the initial number:'));
for (let i = start; i < (start + 10); i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`);
    }
}

//Version 3 using While Loop
//let start = Number(prompt('Enter the initial number:'));
let i = start;

while(i < (start + 10)){
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`);
    }
    i++
}