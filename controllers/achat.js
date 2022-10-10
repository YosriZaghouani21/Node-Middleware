import mongoose, { Schema } from "mongoose";
const achat = Schema(
  {
    boughtDate: {
      type: date,
      default: new Date(),
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    game: {
      type: Schema.Types.ObjectId,
      ref: "game",
    },
  },
  { timestamps: true }
);
export default mongoose.model("achat", achat);
