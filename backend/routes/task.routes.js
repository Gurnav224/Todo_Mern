
import express from 'express';
import { createTask, getTasks } from '../controller/task.controller.js';
import auth from '../middleware/auth.js';
const router = express.Router();



router.get('/tasks',getTasks);
router.post('/tasks',createTask);


export default router;