import { Pencil, Trash2 } from "lucide-react";

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition flex flex-col gap-3">
  
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-slate-800">
          {task.title}
        </h3>

        <span
          className={`px-3 py-1 text-xs font-medium rounded-full
    ${   task.priority === "High"
        ? "bg-red-100 text-red-600"
                : task.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-600"
                : "bg-green-100 text-green-600"
            }
          `} 


           
        >
          {task.priority}
        </span>
      </div>

    
      {task.description && (
        <p className="text-sm text-slate-600">
          {task.description}
        </p>
      )}

    
      <div className="flex justify-between items-center mt-2">
      <div className="flex items-center gap-3 text-sm">
          <span className="text-slate-500"> {new Date(task.dueDate).toLocaleDateString()}
          </span>

          <span
            className={`px-2 py-1 rounded-full text-xs font-medium
              ${
                task.status === "Completed"   ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
              }
            `}
      
      
      
      >
    {task.status}
 </span>
 </div>

  
 <div className="flex gap-2">
          <button onClick={() => onEdit(task._id)}   className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition"
      >
            <Pencil size={16} />
          </button>

          <button  onClick={() => onDelete(task._id)}  className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition"
             >
            <Trash2 size={16} />
          </button>
 </div>
 </div>
    </div>
  );
};

export default TaskCard;
