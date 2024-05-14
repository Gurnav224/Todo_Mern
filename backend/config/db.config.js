
const mongoose = require("mongoose");

const url = process.env.MONGODB_URL;    

async function dbConnection(){
  try {
  const connection =   await mongoose.connect(url);

  if(connection){
    console.log(`successfully connected to database ${connection.connection.host}`)
  }

  } catch (error) {
    console.error('error while connecting to database',error)
  }
}

module.exports = {dbConnection}