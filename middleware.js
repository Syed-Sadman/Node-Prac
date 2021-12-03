const express=require('express');

const app= express();

const adminRouter=express.Router();


const logger=(req,res,next)=>{
    console.log(`${new Date(Date.now()).toLocaleString()}`);
    next();
}




adminRouter.use(logger);


adminRouter.get('/dashboard',(req,res)=>{
    res.send('Dashboard')
})


app.use('/admin',adminRouter);

app.get('/admin', (req,res)=>{
    console.log('admin get req ')
    res.send('admin get method init')
})


app.get('/',(req,res)=>{
    res.send('this is home  ');
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})