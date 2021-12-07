const express=require('express');
const fs=require('fs');

const app=express();

app.use('/',(req,res,next)=>{
    fs.readFileSync('/fsast-ea',(err,data)=>{
        if(err){
            next(err);
        }else{
            res.send(data);
        }

    })
})



//custom error handler to handle asynchronous behavior 

app.use((err,req,res,next)=>{
    console.log('there was an error')
    res.send(err.message);
})


app.listen(3000,()=>{
    console.log('listening on port 3000');
})