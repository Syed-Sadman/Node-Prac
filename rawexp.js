const express=require('express');

const app=express();

app.use(express.json());


app.get('/',(req,res)=>{ 
    res.send('This is the homepage');
})

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send('This is the homepage with post request');
})


app.listen(3000,()=>{
    console.log(' Listening on port 3000 ')
})
