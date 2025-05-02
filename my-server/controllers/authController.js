import jwt from "jsonwebtoken";
import { joiUserSchema } from "../models/joiValSchema.js";
import CustomError from "../utils/custumError.js";
import bcrypt from "bcryptjs";
import User from "../models/userSchema.js";

// createToken
const createToken = (id, role, expiresIn) => {
  return jwt.sign({ id, role }, process.env.JWT_TOKEN, { expiresIn });
};
const createRefreshToken = (id, role, expiresIn) => {
  return jwt.sign({ id, role }, process.env.JWT_REFRESH_TOKEN, { expiresIn });
};

const userRegister = async (req, res, next) => {
  //validating with joi
  const { value, error } = joiUserSchema.validate(req.body);
  const { name, email, password } = value;
  if (error) {
    return next(new CustomError(error.details[0].message, 400));
  }
  // emailChecking
  const exists = await User.findOne({ email });
  if (exists) {
    return next(new CustomError("User already exists", 400));
  }
  // password Hashing
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  // adding user to db
  await newUser.save();
  res.json({ success: true, message: "user registered" });
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return next(new CustomError("User doesn't exist", 401));
  }

  if (user.isBlocked) {
    return next(new CustomError("User is Blocked", 403));
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return next(new CustomError("Invalid credentials", 401));
  }
  if (user.role === "admin") {
    return next(
      new CustomError(
        "Access denied. Nice try though, but this is the user zone :)",
        403
      )
    );
  }
  // creating token for logged user
  const token = createToken(user._id, user.role, "1h");
  const refreshToken = createRefreshToken(user._id, user.role, "1h");

  user.refreshToken = refreshToken;
  await user.save();

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });

  const currentUser = {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
  res.json({ message: "user successfully logged in", token, currentUser });
};

//logout
const logout = async (req, res, next) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  res
    .status(200)
    .json({ status: "success", message: "Logged out successfully" });
};

export { userRegister, loginUser, logout };

// want to connect
