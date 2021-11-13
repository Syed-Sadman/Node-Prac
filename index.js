// const people=require('./people.js');

// console.log(people.a);
// console.log(people.test);
// console.log(people.people);

////// Path modules///


// const path=require('path');
// const pathname= 'E:\Node Sum\index.js';

// console.log(path.basename(pathname));




//  OS Module

// const os=require('os');
// // console.log(os.platform());
// // console.log(os.totalmem());

// console.log(os.cpus());




// // FS Module
// const fs=require('fs');

// fs.readFile('mynewText.txt',(err,data)=>{
//     console.log(data.toString());
// });

// console.log('hello');

// event module

const EventEmitter=require('events');

const emitter=new EventEmitter();

// register the event listener for bell ring

emitter.on('bell ring',()=>{
    console.log('We need to move now');
})


// raise an event 
emitter.emit('bell ring');

