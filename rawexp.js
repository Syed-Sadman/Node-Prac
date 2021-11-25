const express=require('express');

const app=express();

const admin=express();

    //static express
// app.use(express.static(`${__dirname}/public`,{
//     index:'home.html'
//     })
// );


admin.get('/dashboard',(req,res)=>{ 
    console.log(admin.mountpath);
    res.send('welcome to admin dashboard');
})

app.get('/',(req,res)=>{
    res.send('welcome to homepage');
})

app.use('/admin',admin);

// app.post('/',(req,res)=>{
//     res.send('This is the homepage with post request');
// })


app.listen(3000,()=>{
    console.log(' Listening on port 3000 ')
})
