const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  name:{
      type:String,
      required:false,
  },  
  age:{
      type:Number,
      required:false
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