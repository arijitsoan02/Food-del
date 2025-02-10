import mongoose from "mongoose";


export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://arijitsoan:eznlTsnBoVJflMGa@cluster0.oh7w6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log('DB connected'))
}