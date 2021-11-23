const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('This is home page');
        res.end();
    }else if (req.url=='/about-us'){
        res.write('this is about us')
        res.end();
    }else{
        res.write('page not found');
        res.end();
    }
})

server.listen(3000);

console.log('Listening on port 3000');
