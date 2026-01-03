import express from "express";
import { createTask, deleteTask, getAllTasks, singleTask, updateTask } from "../controllers/taskController.js";


const taskRouter= express.Router();



taskRouter.post("/add",createTask);

taskRouter.get("/all",getAllTasks);

taskRouter.put("/:id",updateTask);

taskRouter.delete("/:id",deleteTask);


taskRouter.get("/:id",singleTask);
export default taskRouter;



 


