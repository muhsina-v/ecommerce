import express from "express"
import { createUser, getUsers } from "../controllers/authController.js"

const router = express.Router()

router
.post("/register",createUser)
.get("/get-alluser",getUsers)

export default router