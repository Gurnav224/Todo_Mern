import Task from "../model/task.model.js";
import User from "../model/user.models.js";


export const createTask = async (req, res) => {
    const { title, description, start_date, end_date, progress } = req.body;

    console.log(req.body);

    console.log('user id create new task ',req.user)

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

        console.log(savedTask);
        console.log('create Task user id', req.user);

        console.log('new task created by ', user);

        user.tasks.push(task._id);

        await user.save();

        res.json({ msg: 'new task added successfully', task: savedTask });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('server-error');
    }
};


export const getTasks = async (req, res) => {
  console.log("get Task user Id", req.user);
  try {
    const tasks = await Task.find({ user_id: req.user });
    res.json(tasks);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};

