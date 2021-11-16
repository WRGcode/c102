const express = require("express");
const router = express.Router();

const acount = (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(201).send(`wecome ${name}`);
  }
  res.status(404).json({ success: false, msg: "please provide a name" });
};

module.exports = acount;
