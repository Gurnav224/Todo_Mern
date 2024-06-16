
import jwt from 'jsonwebtoken';

const secret = 'hello I am Gurnav'

const auth = (req,res,next)=>{
    const token = req.header('x-auth-token');

    console.log('recieved token ',token)

    if(!token){
        return res.status(401).json({msg:'No token, authorization denied'})
    }
    try {
        const decoded = jwt.verify(token,secret);
        req.user = decoded.userId;

        console.log("User Id",req.user)

        next();
    } catch (error) {
        res.status(401).json({msg:'token is not valid'})
    }
}


export default auth;