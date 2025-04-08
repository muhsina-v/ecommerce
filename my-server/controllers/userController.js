import User from "../models/userSchema.js";

export const createUser = async (req, res) => {
    const { name, email ,age} = req.body;
    const user = new User({ name , email , age });
    await user.save();
    res.status(201).json({ message: "User ceee", user });
};

export const getUsers = async(req,res)=>{
    const users = await User.find()
    res.json({data:users})
}
