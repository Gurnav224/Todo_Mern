import Task from "../model/task.model.js";
import User from "../model/user.models.js";


export const createTask = async (req, res) => {
    const { title, description, start_date, end_date, progress } = req.body;



    try {
        // Ensure user exists before creating task
        const user = await User.findById(req.user);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const task = new Task({
            title,
            description,
            start_date,
            end_date,
            progress,
            user_id: req.user
        });

        const savedTask = await task.save();



        user.tasks.push(task._id);

        await user.save();

        res.json({ msg: 'new task added successfully', task: savedTask });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('server-error');
    }
};


export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    if(tasks.length!==0){
res.status(200).json({msg:'successfully get all tasks',tasks})
    }
    else{

      res.status(404).json({message:'not task found'})
    }
  } catch (error) {
    res.status(500).json({msg:'server error',error:error.message});
  }
};



export const getSingleTask =  async (req,res)=>{
  const taskId = req.params.taskId
  try {
    const task = await Task.findById(taskId);
    if(task){
      res.status(200).json({msg:'successfully get single task',task:task})
    }
    else{
      res.status(404).json({message:'not task found'})
    }
    res.json(task)
  } catch (error) {
    res.status(500).json({msg:'server error',error:error.message});
  }
}

export const getUpdateTask = async  (req,res)=>{
 try {
  const task = req.body;
  const taskId = req.params.taskId;
  const updatedTask =  await Task.findByIdAndUpdate(taskId,task,{new:true});

  if(updatedTask){
    res.status(200).json({message:'task updated successfully',task:updatedTask})
  }
  else{
    res.status(404).json({message:'not task found'})
  }

 } catch (error) {
  res.status(500).json({msg:'server error',error:error.message});
 }
}


export const getDeleteTask = async (req,res)=>{
  try {
    const taskId = req.params.taskId;
    const deleteTask = await Task.findByIdAndDelete(taskId);
    if(deleteTask){
      res.status(200).json({delete:'successfully',deleteTask})

    }
    else{
      res.status(404).json({message:'not task found'})
    }
  } catch (error) {
    res.status(500).json({msg:'server error',error:error.message});
  }
}