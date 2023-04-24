//PSEUDO CODE 
//Get input value of temperature to be converted
//convert the value from celsius to Farhenheit
//display the converted temperature in Farhenheit

document.querySelector('#convert').addEventListener('click', convert);

function convert(){
    let temp = document.querySelector('#temperature').value;
    let farhenheit = temp * 9/5 + 32;
    
    document.querySelector('#display').innerText = farhenheit;
}

