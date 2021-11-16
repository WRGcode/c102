const jwt = require('jsonwebtoken')
require('dotenv').config()

const {UnauthError} = require('../errors')

const authMiddleware = (req, res, next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader|| !authHeader.startsWith('Bearer ')){
        throw new UnauthError('no token provided')
    }
    
    const token = authHeader.split(' ')[1]
    
    console.log(token);
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username} = decoded
        req.user = {id, username}
        next()
    } catch (err){
        throw new UnauthError('Not authorized to access this route')
    }
}

module.exports = authMiddleware