const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/'){    
        res.write('Hello programmers');
        res.end();
    }else if(req.url=='/about-us'){
        
        res.write('welcome to about us page');
        res.end();
    }else{
        res.write('page not found 404 error');
        res.end();

    }
    
});


server.listen(3000);
console.log('listening to server on port 3000');
