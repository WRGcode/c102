const req = require('express/lib/request')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try{
    if (!req.headers.authorization) {
      return res.status(401).send("unauthorization")
    }
    if (!req.headers.authorization.split(" ")[0] === "Bearer") {
      return res.status(401).send("unauthorization")}

    const {userId} = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    )

    const auth = req.authorization.split(" ")[0]

    req.userId = userId
    next()
  }catch (error){
    console.log(error);
    return res.status(401).send("unauthorization")
  }
}