import mongoose from "mongoose";


const taskSchema= new mongoose.Schema({

title:{
    type:String,
    required:true
},
description:{
    type:String,
     default:"",
},
priority:{
    type:String,
    enum:["Low","Medium","High"],
    default:"Low",
},
dueDate:{
    type:Date,
    required:true,
},
status:{
    type:String,
    enum: ["Pending","Completed"],
    default:"Pending"
}





},{timestamps:true});


const Task= mongoose.model("Task",taskSchema);


export default Task;