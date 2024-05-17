
const mongoose = require('mongoose');
const { type } = require('os');
const {Schema} =  mongoose ;


const taskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    progress:{
        type:String,
        enum:['Not started','In progress','Completed'],
        default:'Not started'
    },
    start_date:{
        type:Date,
        default:Date.now()
    },
    end_date:{
        type:Date
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})


const Task = mongoose.model('Task',taskSchema);

module.exports = Task;

