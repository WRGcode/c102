const express = require('express')
const router = express()

const { createProduct, getAllProducts, } = require("../Controllers/productConstroller")

const {uploadProductImage} = require('../Controllers/uploadController')

router.route('/').get(getAllProducts).post(createProduct)
router.route('/uploads').post(uploadProductImage)

module.exports = router;