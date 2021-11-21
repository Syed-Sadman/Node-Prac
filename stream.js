const fs= require('fs');

const readData=fs.createReadStream(`${__dirname}/mynewText.txt`);
const writeData=fs.createWriteStream(`${__dirname}/writeData.txt`);


// readData.on('data',(chunk)=>{
//     writeData.write(chunk);
// })
//this pipe method can do the same task in a most friendly way 
readData.pipe(writeData);