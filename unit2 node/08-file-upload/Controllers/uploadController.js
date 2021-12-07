const path = require('path')
const cloudinary = require('cloudinary').v2
const fs = require('fs')

const olduploadProductImage = async (req, res) => {

    if (!req.files) {
        console.log('no file added')
    }
    const productImage = req.files.image
    console.log(productImage + 'IMAGE');

    // if (!productImage.minetype.startsWith('image')) {
    //     console.log('choose an image ONLY!')
    // }

    const maxSize = 1024 * 1024;
    if (productImage.size > maxSize) {
        console.log('image to big')
    }

    const imagePath = path.join(
        __dirname,
        "../public/uploads/",
        productImage.name

    )
    await productImage.mv(imagePath)

    res.status(200).json({ image: { src: `/uploads/${productImage.name}` } })

    // res.send("uploadProductImage")
}

const uploadProductImage = async (req, res) => {
    const response = await cloudinary.uploader.upload(req.files.image.tempFilePath,
        {
            use_filename: true,
            folder: "file-upload"
        })
    fs.unlinkSync(req.files.image.tempFilePath);
    return res.status(200).json({ image: { src: response.secure_url } })
}

module.exports = uploadProductImage
