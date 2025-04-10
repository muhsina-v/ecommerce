import jwt from "jsonwebtoken"
import { joiUserSchema } from "../models/joiValSchema";
import CustomError from "../utils/custumError";
// import bcrypt from 'bcrypt';



//create token using jwt.sign
const createToken=(id,role,expiresIn)=>{//id mongodb_id
  return jwt.sign({id,role},process.env.JWT_TOKEN,{expiresIn});
}
const refreshToken=(id,role,expiresIn)=>{
  return jwt.sign({id,role},process.env.JWT_REFRESH_TOKEN,{expiresIn})
}
//validating wih joi
const userRegister=async(req,res,next)=>{
  const {value,error}=joiUserSchema.validate(req.body)
  if(error){
    return next(new CustomError(error.details[0].message,400));

  }
  const exist=await User.findOne({email});
  if(exist){
    return next(new CustomError("User already exists",400))
  }
  //hashing password
  const hashedPassword =await bcrypt.hash
}

