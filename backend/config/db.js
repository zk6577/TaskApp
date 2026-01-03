import mongoose  from "mongoose";

const connectDb= async ()=>{
    try {
   

   await mongoose.connect(process.env.MONGO_URL);
   console.log("DataBase Connected")
         

    } catch (error) {
         console.log("DataBase erorre",{error});

    }
}



export default connectDb;