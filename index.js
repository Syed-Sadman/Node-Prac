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




// FS Module
const fs=require('fs');

fs.readFile('mynewText.txt',(err,data)=>{
    console.log(data.toString());
});

console.log('hello');