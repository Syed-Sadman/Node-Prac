const fs= require('fs');

const readData=fs.createReadStream(`${__dirname}/mynewText.txt`);

readData.on('data',(data)=>{
    console.log(data);
})

console.log('hello');