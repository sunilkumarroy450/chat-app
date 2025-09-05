import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    text: { type: String },
    image: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Message = mongoose.model("messages", messageSchema, "messages");

export default Message;
