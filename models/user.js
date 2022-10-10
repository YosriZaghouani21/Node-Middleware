import mongoose, { Schema } from "mongoose";

const user = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    wallet: Number,
  },
  { timestamps: true }
);
export default mongoose.model("user", user);
