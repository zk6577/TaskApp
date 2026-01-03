import { useState } from "react";

const TaskForm = ({ onSubmit, buttonText }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("Pending"); 
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !dueDate) return;

    onSubmit({
      title,
      description,
      priority,
      status,      
      dueDate,
    });
  };

  return (
    <form

      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4"
    >




      <h2 className="text-xl font-semibold text-slate-800">
        Task Details
      </h2>

   
      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">
          Title *
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"    placeholder="Enter task title"
        />
      </div>

      
      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}         className="w-full border rounded-lg px-3 py-2"  placeholder="Optional description"
        />
      </div>


      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">
          Priority
        </label>
        <select
          value={priority}       onChange={(e) => setPriority(e.target.value)}     className="w-full border rounded-lg px-3 py-2"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
  <div>
   <label className="block text-sm font-medium text-slate-600 mb-1">
          Status
        </label>
        <select
          value={status}    onChange={(e) => setStatus(e.target.value)}     className="w-full border rounded-lg px-3 py-2"
        >
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>

     
      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">
          Due Date *
        </label>
        <input  type="date"   value={dueDate}      onChange={(e) => setDueDate(e.target.value)}  className="w-full border rounded-lg px-3 py-2"
        />
      </div>
      <button
        type="submit"
        disabled={!title || !dueDate}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
      >
          {buttonText}
      </button>
    </form>
  );
};

export default TaskForm;
