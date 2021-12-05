const express=require('express');

const adminRouter=express.Router();



adminRouter.get('/',(req,res)=>{
    res.send('admin page');
})

adminRouter.get('/dashboard',(req,res)=>{
    res.send('Dashboard page');
})


module.exports=adminRouter;