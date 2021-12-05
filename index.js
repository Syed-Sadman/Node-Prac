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

// // event module



// const Period=require('./period.js');

// const period=new Period();

// // register the event listener for bell ring

// period.on('bell ring',({period,text})=>{
//     console.log(`We need to move now because ${period} ${text}`);
// })


// // raise an event 

// period.startPeriod();


const express=require('express');
const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouter');

const app=express();

app.use('/',publicRouter);
app.use('/admin',adminRouter);



app.listen(3000,()=>{
    console.log('listening on port 3000');
});







