//Program: Neither YES nor NO

let text = prompt('Enter first text:');
console.log(text);

while(text !== 'yes' && text !== 'no'){
    text = prompt('Enter another text:');
}