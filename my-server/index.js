import express from "express"
import dotenv from 'dotenv'
import ConnectDB from "./config/dbConnect.js"
import userRouter from './routes/userRoute.js'
dotenv.config()

const port=process.env.PORT

const app=express()
ConnectDB()
app.use(express.json())

app.get("/test",(req,res)=>{
    res.json("hellooo")
})

app.use("/",userRouter)


app.listen(port,()=>{
    console.log("server running on "+ port)
})

