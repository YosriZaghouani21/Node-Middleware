import mongoose, { Schema } from "mongoose";
const game = Schema(
  {
    title: String,
    description: String,
    price: Number,
    quantity: Number,
  },

  { timestamps: true }
);
export default mongoose.model("game", game);
