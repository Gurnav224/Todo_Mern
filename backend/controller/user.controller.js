import User from "../model/user.models.js"


export const getAllUser = async (req,res)=>{
    try {
        const userId = req.params.userId;
     const user = await User.findById(userId).populate('tasks');
     if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'All tasks by user', tasks: user });
    } catch (error) {
        res.status(500).json({message:'server error',error:error.message})
    }
}