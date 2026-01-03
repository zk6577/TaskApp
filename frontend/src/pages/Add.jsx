import TaskForm from "../components/TaskForm";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const AddTask = () => {
  const navigate = useNavigate();

  const handleAddTask = async (taskData) => {
    try {
      const result = await axios.post("https://taskapp-12bj.onrender.com/api/tasks/add",taskData,{withCredentials:true});

 toast.success("Task added successfully!");
      navigate("/"); 
     
    } catch (error) {
      console.error("Error adding task", error);
      toast.error("Failed to add task");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5E6EBF] to-[#FC466B] p-6">
      <div className="max-w-xl mx-auto">

        
        <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Add New Task
        </h1>






        <TaskForm
          onSubmit={handleAddTask}      buttonText="Add Task"
        />



      </div>
    </div>
  );
};

export default AddTask;
