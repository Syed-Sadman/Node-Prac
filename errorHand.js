const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send(a);
});



app.use((req,res,next)=>{
    res.status(404).send('requested url not found');
})

app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).send('there was an error');
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
})