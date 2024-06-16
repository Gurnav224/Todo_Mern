import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    progress:{
        type:String,
        enum:['Not Started','In Progress','Completed'],
        default:"Not Started"
    },
    start_date:{
        type:Date,
        default:Date.now
    },
    end_date:{
        type:Date,
        default:Date.now
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})


const Task = mongoose.model('Task',taskSchema);

export default Task