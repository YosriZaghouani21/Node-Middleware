import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 9090;

import gameRoutes from "./routes/game.js";
import userRoutes from "./routes/user.js";
import achatRoutes from "./routes/achat.js";

mongoose.connect("mongodb://localhost:27017/4SIM1", (err) => {
  if (err) {
    console.log("Unable to connect");
  } else {
    console.log("CONNECTED !");
  }
});

mongoose.Promise = global.Promise;

app.use(express.json());

app.use("/game", gameRoutes);
app.use("/user", userRoutes);
app.use("/buy", achatRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
