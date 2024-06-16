import User from "../model/user.models.js";
import jwt from 'jsonwebtoken';
import {validationResult} from 'express-validator';

const secret = 'hello I am Gurnav'

const generateToken = (userId)=>{
    return jwt.sign({userId},secret,{expiresIn:'24h'})
}

export const register = async (req,res)=>{
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    res.status(400).json({errors:errors.array()});
  }

  const {name,email,password} = req.body;

    try {

        let user = await User.findOne({email});

        if(user){
            return res.status(400).json({msg:'user already exits'})
        }

        user = new User({name,password,email});

       const savedUser =  await user.save();

       console.log(savedUser)



       const token = generateToken(user._id)

        res.json({message:'user registered successfully',user,token})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


export const login = async (req,res) =>{
    const errors  = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
    }

    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});

        console.log(user)

        if(!user){
            res.status(400).json({msg:'Invalid Credentials'});
        }

        const isMatch = await user.comparePassword(password);

        if(!isMatch){
            return res.status(400).json({msg:"Invalid Credentials"})
        }


        const token = generateToken(user._id)

        res.json({message:'login successfully',user,token})

    } catch (error) {
        console.error(error.message);

        res.status(500).json('Server error')
    }
}