const express=require('express');

const cookieParser=require('cookie-parser');
const app= express();



app.use(cookieParser());// cookie-parser middleware
const adminRouter=express.Router();


const logger=(req,res,next)=>{
    console.log(`${new Date(Date.now()).toLocaleString()}`);
    throw new Error('an unexpted erorr occured');
}




adminRouter.use(logger);


adminRouter.get('/dashboard',(req,res)=>{
    res.send('Dashboard')
})


const errorMiddleware=(err,req,res,next)=>{
    console.log(err.message);
    res.status(500).send('server side error occured');
}

adminRouter.use(errorMiddleware);


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