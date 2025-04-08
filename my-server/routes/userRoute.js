import express from "express"
import { createUser, getUsers } from "../controllers/userController.js"

const router = express.Router()

router
.post("/register",createUser)
.get("/get-alluser",getUsers)

export default router