//login function returns json with success

// const CustomAPIError = require("../errors/custom-error");
const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (req, res) => {
  const { username, password } = req.body;
  // res.send('temp login/resister/signup route')
  
  // 3 ways to verify username and password
  //moongoose validation
  //JOI
  //controller checking
  
  if (!username || !password) {
    throw new BadRequestError("please provide email/password");
  }
  
  console.log(username, password);
  //example in the future this will come form mongoDB
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
// console.log(token);
  res.json({ status: 200, msg: "succuss- user created",  token });
};

//dashboard returns json with success

const dashboard = (req, res) => {
  // throw new CustomAPIError('testing API', 400)
  res.json({
    status: 200,
    msg: req.user.username,
    // results: [],
    secret: req.headers.authorization,
  });
};

module.exports = { login, dashboard };
