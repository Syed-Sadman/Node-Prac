const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("./schema/todoSchema");
const Todo = new mongoose.model("Todo", todoSchema);

// GET all the TODOS
router.get('/',async(req,res)=>{

})


// GET A todos by id 
router.get('/:id',async(req,res)=>{
    
})


// POST TODOS
// router.post("/", async (req, res) => {
//     const newTodo = new Todo(req.body);
//     console.log(req.body);
//     await newTodo.save((err) => {
//       if(err){
//         res.status(500).json({
//           error: err
//         });
//       }else{
//         res.status(200).json({
//           message: "Todo was inserted successfully!",
//         });
//       }
//     });
//   });

// POST Multiple TODOS
router.post('/all',async(req,res)=>{
  await Todo.insertMany(req.body,(err)=>{
    if(err){
        res.status(500).json({
        error:"there was an error"
      });
    }else{
        res.status(200).json({
        message: "Todos were inserted successfully!",
        });
      }
  })
})


// PUT TODOS///updating id's
router.put('/:id',async(req,res)=>{
  await Todo.updateOne({_id:req.params.id},{
    $set:{
      age:'23'
    }
  },(err)=>{
    if(err){
      res.status(500).json({
      error:"there was an error"
    });
  }else{
      res.status(200).json({
      message: "Todo was updated successfully!",
      });
    }
  })
    
})



// Delete TODOS
router.delete('/:id',async(req,res)=>{
    
})


module.exports=router;