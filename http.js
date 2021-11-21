const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{

    const readStreamData=fs.createReadStream(`${__dirname}/writeData.txt`);

    readStreamData.pipe(res);
    
  
    // if(req.url=='/'){    
    //     res.write('<html><head><title>Form</title></head></html>');
    //     res.write('<body><form method="post" action="/process"><input name="message"/></form></body>')
    //     res.end();
    // }else if(req.url=='/process' && req.method=='POST'){
    //     res.write('data', (chunk)=>{
    //         console.log(chunk);
    //     })
    //     res.write('welcome to about us page');
    //     res.end();
    // }else{
    //     res.write('page not found 404 error');
    //     res.end();

    // }
    
});


server.listen(3000);
console.log('listening to server on port 3000');
