import express from "express";
import {register , login} from '../controller/auth.controller.js'
import {check} from "express-validator"

const router = express.Router();


router.post('/register',[
    check('name','Name is required').not().isEmpty(),
    check('email','Email is required').not().isEmpty(),
    check('password','Please enter a password with 6 or more characters').isLength({min:6})
],register);


router.post('/login',[
    check('email','Please include a valid email').isEmail(),
    check('password','Password is required').exists()
], login)

export default router;