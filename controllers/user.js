import { response } from "express";
import User from "../models/user.js";

export const users = [];
var id = 1;

export function signin(req, res) {
  User.find(
    {
      username: req.body.username,
      password: req.body.password,
    },
    (err, doc) => {
      if (err) {
        return res.status(405).json(err);
      } else if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).send("not found");
      }
    }
  );
}

export function signup(req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    wallet: req.body.wallet,
  });
  user
    .save()
    .then((doc) => {
      res.status(201).json({
        username: doc.username,
        password: doc.password,
        wallet: doc.wallet,
      });
    })
    .catch((err) => res.status(405).json(err));
}

export function putOnce(req, res) {
  const user = users.find((val) => val.id == req.params.id);
  user.username = req.body.username;
  user.password = req.body.password;
  user.wallet = req.body.wallet;
  res.status(200).json(user);
}
