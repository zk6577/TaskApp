
import React, { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Home({task, onEdit, onDelete}) {

const [tasks,setTasks]=useState([])
  const navigate = useNavigate();
const getalltask= async()=>{
  try{
const result= await axios.get("http://localhost:5000/api/tasks/all", { withCredentials: true })
   setTasks(result.data)

  }catch(error){
 console.log("error in getting the all task",error)
  }
}
const handleEdit = (id) => {
     navigate(`/edit/${id}`);
};

  const handleDelete = async (id) => {
     try{
const result= await axios.delete(`http://localhost:5000/api/tasks/${id}`, { withCredentials: true })
 toast.success("Task deleted successfully!");
   getalltask()

  }catch(error){
 console.log("error in deleting the  task",error)
 toast.error("Failed to delete task");
  }
}

  
useEffect(()=>{
getalltask()
},[])
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5E6EBF] to-[#FC466B] p-6">
      <div className="flex items-center justify-center">
        <h1 className=" text-white font-semibold text-[30px] mr-8">Task Tracker</h1>
       
      </div>
  <div className="flex items-center justify-center">
     <button
          onClick={() => navigate("/add")}
          className="mt-4 px-6 py-2 rounded-lg bg-white text-[#5E6EBF]
                     text-base font-semibold hover:bg-slate-100 transition shadow-md"
        >
           Add Task
        </button>
  </div>
      <div className="mt-6 gap-7 max-w-md flex flex-col mx-auto">
      {tasks.map(task => (
  <TaskCard 
    key={task._id}
    task={task}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />
))}
      </div>
    </div>
  );
}

export default Home;
