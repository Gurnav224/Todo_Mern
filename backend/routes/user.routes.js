import express from "express";
import { getAllUser } from "../controller/user.controller.js";
import auth from "../middleware/auth.js";
const router = express.Router();


router.get('/user/:userId/tasks',getAllUser);


export default router;

