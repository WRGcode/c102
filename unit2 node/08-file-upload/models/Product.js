const moogoose = require('mongoose')

const ProductSchema = new moogoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
})

module.exports = moogoose.model('Product',
ProductSchema)