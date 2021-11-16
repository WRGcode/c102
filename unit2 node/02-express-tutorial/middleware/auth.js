const auth = (req, res, next) => {
    console.log('ping')
    next()
}

module.exports = auth