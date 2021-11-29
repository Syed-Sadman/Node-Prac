const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();

const adminPan=express.Router();

app.use(cookieParser())

//app.set('view engine', 'ejs');
    //static express
// app.use(express.static(`${__dirname}/public`,{
//     index:'home.html'
//     })
// );


// admin.get('/dashboard',(req,res)=>{ 
//     console.log(admin.mountpath);
//     res.send('welcome to admin dashboard');
// })

app.use('/admin',adminPan)


adminPan.get('/dashboard',(req,res)=>{
    console.log(req.cookies);
    res.send('we are in admin dashboard');
})




app.get('/user/:id',(req,res)=>{
    console.log(req.originalUrl);
    res.send('welcome to user page');

})

// app.route('/about/mission')
//     .get((req,res)=>{
//         res.render('abt')
//     })
//     .post((req,res)=>{
//         res.send('this is page post')
//     })
//     .put((req,res)=>{
//         res.send('this is page put')
//     })
// app.param('id',(req,res,next,id)=>{
//     const user={
//         name:id,
//         identity:'Bangladesh'
//     }
//     req.userDetails=user;
    
//     next();
// })

// app.get('/user/:id',(req,res)=>{
//     console.log(req.userDetails);
//     res.send('welcome to homepage');
// })

// app.use('/admin',admin);

// app.post('/',(req,res)=>{
//     res.send('This is the homepage with post request');
// })


app.listen(3000,()=>{
    console.log(' Listening on port 3000 ')
})
