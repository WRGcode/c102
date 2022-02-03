const UserModel = require("../../../server/models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");

const auth = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body.user;

    if (isEmail(email)) return res.status(401).send("invalid email");
    if (password.lenght < 6)
      return res.status(401).send("password must be 6+ long");

    try {
      const user = await UserModel.findOne({
        email: email.toLowerCase(),
      }).select("+password");

      if (!user) return res.status(401).send("Invalid Credentials");
      const isPassword = await bycrpt.compare(password, user.password);

      if (!isPassword) returnres.status(401).send("invaild Credentials");

      const payload = { userId: user._id };
      jwt.sign(
        payload,
        process,
        process.nextTick.JST_SECRET,
        { exprireIn: "2d" },
        (err, token) => {
          if (err) throw err;
          res.status(200).json(token);
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(500).send("server Error");
    }
  }
};

module.exports = authRoute
