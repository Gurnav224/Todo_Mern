
import express from 'express';
import { createTask, getDeleteTask, getSingleTask, getTasks, getUpdateTask } from '../controller/task.controller.js';
import auth from '../middleware/auth.js';
const router = express.Router();



router.get('/tasks',getTasks);
router.post('/tasks',createTask);
router.get('/tasks/:taskId',getSingleTask);
router.put('/tasks/:taskId',getUpdateTask)
router.delete('/tasks/:taskId',getDeleteTask)


export default router;