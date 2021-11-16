const { models } = require('mongoose')
const CustomAPIError = require('../errors/custom-error')

const errorHandlerMiddlewere = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).send('something when wrong ')
}

module.exports = errorHandlerMiddlewere