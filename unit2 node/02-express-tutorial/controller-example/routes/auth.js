const express = require("express");
const router = express.Router();

const { acount } = require("../controllers/people");

router.route("/").post(acount);

module.exports = router;
