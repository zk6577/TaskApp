import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import TaskForm from "../components/TaskForm";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [taskData, setTaskData] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchTask = async () => {
    try {
      const res = await axios.get(
        `https://taskapp-12bj.onrender.com/api/tasks/${id}`,
        { withCredentials: true }
      );
      setTaskData(res.data);
    } catch (err) {
      console.log("Error while fetching task", err);
      toast.error("Unable to load task");
    } finally {
      setLoading(false);
    }
  };


  const updateTask = async (data) => {
    try {
      await axios.put(
        `https://taskapp-12bj.onrender.com/api/tasks/${id}`,  data,    { withCredentials: true }
      );
      toast.success("Task updated");
      navigate("/");
    } catch (err) {
      console.log("Update error", err);
      toast.error("Update failed");
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white">
        Loading...
      </div>
    );
  }

  if (!taskData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5E6EBF] to-[#FC466B] p-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-5 text-center">   Update Task</h2>

        <TaskForm     initialData={taskData} onSubmit={updateTask}   buttonText="Update Task"
        />
      </div>
    </div>
  );
}

export default Update;
