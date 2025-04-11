import express from "express"
import dotenv from 'dotenv'
import ConnectDB from "./config/dbConnect.js"
// import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser"

dotenv.config()

const port=process.env.PORT

const app=express()
ConnectDB()
app.use(express.json())
app.use(cookieParser())



app.use("/auth", authRoutes)
// app.use("/user", userRoutes);


app.all("*",(req,res)=>{
    res.status(400).json({message:'cannot access the endpoint'})
  })
  


app.listen(port,()=>{
    console.log("server running on "+ port)
})

