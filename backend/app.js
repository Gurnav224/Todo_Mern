import { connectDB } from "./config/db.connect.js";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();


app.use('/api/auth',authRoutes);
app.use('/api/auth',taskRoutes)

app.get('/',(req,res)=>{
    res.send(`<h1>Todo server </h1>`)
})




const PORT =  process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})