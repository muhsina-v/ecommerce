import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email:{ type:String,required:true, unique:true },
  age:{ type:string ,required:true}
});

const User = mongoose.model("User", userSchema);

export default User;
