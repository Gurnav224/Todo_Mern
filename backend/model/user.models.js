import mongoose from "mongoose";
import bcryptjs  from "bcryptjs"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    tasks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Task'
    }]

},{
    timestamps:true
})

userSchema.pre('save',async function(next){
    if(this.isModified('password') || this.isNew){
        const salt = await bcryptjs.genSalt(10);
        this.password = await bcryptjs.hash(this.password,salt)
    }
    next();
})

userSchema.methods.comparePassword = async function (password){
    return bcryptjs.compare(password,this.password)
}

const User = mongoose.model('User',userSchema);

export default User;

