import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    message: String,
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  },
);
const messageModel = mongoose.model("message", messageSchema);

export default messageModel;
