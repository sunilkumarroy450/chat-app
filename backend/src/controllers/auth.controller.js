import bcryptjs from "bcryptjs";

import User from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";
import cloudinary from "../lib/cloudinary.js";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      return res.status(400).send({
        message: "All fields are required",
        success: false,
      });
    }
    //check password length;
    if (password.length < 6) {
      return res.status(400).send({
        message: "Password must be at least 6 characters",
        success: false,
      });
    }
    //check whether user exist with email
    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .send({ message: "Email already exists", success: false });
    }

    //hash password

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //create user
    const newUser = new User({ fullName, email, password: hashedPassword });
    if (newUser) {
      //generate jwt token
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).send({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).send({ message: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error in signup controller", error.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //check user exist with this email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "Invalid credentials" });
    }
    //compare the password
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send({ message: "Invalid credentials" });
    }
    //if valid then generate token
    generateToken(user._id, res);

    res.status(200).send({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error("Error in login controller", error.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).send({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout controller", error.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;
    if (!profilePic) {
      return res.status(400).send({ message: "Profile pic is required" });
    }
    const uploadResponse = await cloudinary.uploader.upload(profilePic);
    const updateUser = await User.findByIdAndUpdate(
      userId,
      {
        profilePic: uploadResponse.secure_url,
      },
      { new: true }
    );
    res.status(200).send(updateUser);
  } catch (error) {
    console.error("Error in updateProfile controller", error.message);
    res.status(500).send({ message: "Internal server error" });
  }
};

export const checkAuth = (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch (error) {
    console.error("Error in checkAuth controller", error.message);
    res.status(500).send({ message: "Internal server error" });
  }
};
