
import mongoose from "mongoose";

const Uri = process.env.MONGODB_URL;

export const connectDB = async (req,res)=>{
    try {
        const connection = await mongoose.connect(Uri,{dbName:"TodoDB"})
        
        if(connection){
            console.log(`successfully connected to database ${connection.connection.host}`)
        }
    } catch (error) {
        console.error('failed to connect to database ',error)
        process.exit(1)
    }
}

