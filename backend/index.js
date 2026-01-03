import express from  'express';
import dotenv from "dotenv"
import connectDb from './config/db.js';
import taskRouter from './routes/taskRoute.js';
import cors from 'cors'
dotenv.config();


const app=express();
const port=process.env.PORT || 5001;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 
      
      "https://taskapp-1-ab7x.onrender.com/"
    ,
                methods: ["GET", "POST", "PUT", "DELETE"],
        credentials:true
    })
)

app.use("/api/tasks",taskRouter)

app.get("/",(req,res)=>{
    res.send("Server Working")
})
app.listen(port,()=>{
    console.log(`Server is listening at ${port} `)
    connectDb();
})


