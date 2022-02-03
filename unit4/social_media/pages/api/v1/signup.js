const UserModel = require("../../../server/models/UserModel");
const FollowerModel = require("../../../server/models/FollworModel");
const ProfileModel = require("../../../server/models/profileModel");
const usernameRegex = require("../../../util/usernameRegex");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");

signupRoute = async (req, res) => {
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //* GET username available route
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if (req.method === "GET" && req.params) {
    console.log(req.params);
    const { username } = req.params;
    try {
      if (username.length < 1) return res.status(401).send("invalid");
      if (usernameRegex.test(username)) return res.status(401).send("invalid");

      const user = await UserModel.findOne({
        username: username.toLowerCase(),
      });
      if (user) return res.status(401).send("username not available");

      return res.status(200).send('Available')
    } catch (error) {
      console.log(error);
      res.status(500).send("there was an server error");
    }
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //* POST username available route
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  else if (req.method === "POST") {
    const {
      name,
      email,
      password,
      bio,
      facebook,
      youtube,
      twitter,
      instagram,
    } = req.body.user;

    if (!isEmail(email)) return res.status(401).send("Invalid Email");
    if (password.length < 6)
      return res.status(401).send("Invalid password must be 6+ long");

    try {
      let user;
      user = await UserModel.findOne({ email: email.toLowerCase() });
      if (user) return res.status(401).send("Email already in use");

      user = new UserModel({
        name,
        email: email.toLowerCase(),
        username: username.toLowerCase(),
        password,
        profilePicURL: req.body.profilePicURL || defaultProfilePicURL,
      });

      user.password = await bcrypt.hash(password, 10);
      user = await user.save();

      let profileFields = {};
      profileFields.user = user._id;
      if (bio) profileFields.bio = bio;
      if (twitter) profileFields.twitter = twitter;
      if (youtube) profileFields.youtube = youtube;
      if (facebook) profileFields.facebook = facebookbio;
      if (instagram) profileFields.instagram = instagram;

      await new ProfileModel(profileFields).save();
      await new FollowerModel({
        user: user._id,
        Follower: [],
        Following: [],
      }).save();

      const payload = { userID: user._id };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "2d" },
        (err, token) => {
          if (err) throw err;
          res.status(200).json(token);
        }
      );
    } catch (error) {
      console.log(error);
      res.status(500).send("server error");
    }
  } else {
    res.status(500).send("method not supported");
  }
};

module.exports = signupRoute;
