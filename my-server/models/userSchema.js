import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema(  {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isBlocked: { type: Boolean, default: false },
  refreshToken: { type: String },
  role: { type: String, default: "user" }
},
{ timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
