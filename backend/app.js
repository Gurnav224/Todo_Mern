import { connectDB } from "./config/db.connect.js";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js"
import userRoutes from './routes/user.routes.js';
import auth from "./middleware/auth.js";
import cors from "cors";


const app = express();

const corsOptions = {
    origin:"*",
    Credential:true
}

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();



app.use('/api/v1',authRoutes);
app.use('/api/v1',taskRoutes)
app.use('/api/v1',userRoutes)

app.get('/',(req,res)=>{
    res.send(`<h1>Todo server </h1>`)
})




const PORT =  process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})