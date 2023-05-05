//Create a stopwatch object that has four properties and three methods
let stopwatch = {};

stopwatch.color = 'black';
stopwatch.size = 'small';
stopwatch.shape = 'square';

stopwatch.start = function start(){
    console.log('Starting...');
}

stopwatch.stop = function stop(){
    console.log('Stopped');
}

stopwatch.alarm = function alarm(){
    console.log('Ping! Ping! Ping!');
}
