import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true, minlength: 6 },
    profilePic: { type: String, default: "" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema, "users");

export default User;
