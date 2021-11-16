const customAPIError = require('./custom-error')
const {StatusCodes} = require('http-status-codes')
const CustomAPIError = require('./custom-error')

class UnauthError extends CustomAPIError {
    constructor(message) {
        
    }
}

// module.exports UnauthError