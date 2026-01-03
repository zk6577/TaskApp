import Task from "../model/taskModel.js";




export const createTask= async (req,res)=>{

 try {

const {title,description,priority,dueDate,status}=req.body;


if(!title){
    return res.status(400).json({message:"Title is required"})
}
const addTask= await Task.create({title,description,priority,dueDate,status});

return res.status(201).json(addTask);
 

 }catch(error){
 console.log("Error in adding task", error); 
  return res.status(500).json({message:"Internal Server Error"});   
 }


}


export const getAllTasks = async (req,res)=>{
 try {
  const allTasks= await Task.find({});
  return res.status(200).json(allTasks);
 


 }catch(error){
console.log("Error in fetching all tasks", error); 
  return res.status(500).json({message:"Internal Server Error"});
 }
}


 export const updateTask= async(req,res)=>{
try{
  const id = req.params.id

  const {title,description,priority,dueDate,status}=req.body;


  const updatedTask= await Task.findByIdAndUpdate(id,{title,description,priority,dueDate,status},{new:true});
  if (!updatedTask) {
  return res.status(404).json({ message: "Task not found" });
}
  return res.status(200).json(updatedTask);
  
}catch(error){
console.log("Error in Updating the  Task", error); 
  return res.status(500).json({message:"Internal Server Error"}); 
}





 }



 export const deleteTask = async (req,res)=>{
    try{

  const id = req.params.id
 const deletedTask= await Task.findByIdAndDelete(id);
if (!deletedTask) {
  return res.status(404).json({ message: "Task not found" });
}

       return res.status(200).json({message :"Task Deleted Successfully"});


    }catch(error){
console.log("Error in Deleting the  Task", error); 
  return res.status(500).json({message:"Internal Server Error"});
    }
 }



 export const singleTask= async (req,res)=>{

 try{
 const id=req.params.id;
  if(!id){
      console.log("User Id is missing"); 
    }
const oneTask= await Task.findById(id);
if (!oneTask) {
  return res.status(404).json({ message: "Task not found" });
}

 return res.status(200).json(oneTask);


 }catch(error ){
   console.log("Error in fetching single task", error); 
  return res.status(500).json({message:"Internal Server Error"});
 }


 }