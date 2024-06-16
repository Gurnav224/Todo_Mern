
import express from 'express';
import { createTask, getTasks } from '../controller/task.controller.js';
import auth from '../middleware/auth.js';
const router = express.Router();



router.get('/tasks',auth,getTasks);
router.post('/tasks',auth,createTask);


export default router;