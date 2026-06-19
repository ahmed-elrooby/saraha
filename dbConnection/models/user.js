import mongoose from "mongoose";

const usserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.model("user", usserSchema);

export default userModel;
