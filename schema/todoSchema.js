const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  name:{
      type:String,
      required:true,
  },  
  age:{
      type:Number,
      required:true
  }

//   status: {
//     type: String,
//     enum: ["active", "inactive"],
// //   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
});

module.exports = todoSchema;