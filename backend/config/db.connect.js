
import mongoose from "mongoose";

const Uri = process.env.MONGODB_URL;


export const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect(Uri)
        
        if(connection){
            console.log(`successfully connected to database ${connection.connection.host}`)
        }
    } catch (error) {
        console.error('failed to connect to database ',error)
        process.exit(1)
    }
}

