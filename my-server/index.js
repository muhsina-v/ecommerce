import express from "express"
import dotenv from 'dotenv'
import ConnectDB from "./config/dbConnect.js"
import userRouter from './routes/userRoute.js'
import productRouter from "./routes/productRoute.js"
import cookieParser from "cookie-parser"

dotenv.config()

const port=process.env.PORT

const app=express()
ConnectDB()
app.use(express.json())
app.use(cookieParser())

app.get("/:id",(req,res)=>{
    res.send(req.params.id);
})

app.use("/user",userRouter)
app.use("/product",productRouter)

app.listen(port,()=>{
    console.log("server running on "+ port)
})

