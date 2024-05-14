const express = require('express');
require('dotenv').config();
const {dbConnection } = require("./config/db.config")

const PORT = process.env.PORT || 3001;

dbConnection()

const app = express();

app.get('/',(req,res)=>{
    res.json({message:'Server Started'})
})


app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})