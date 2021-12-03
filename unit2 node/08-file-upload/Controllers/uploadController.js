const path = require('path')

const uploadProductImage = async (req, res) => {
    
    if (!req.files){
        throw new Error('no file added')
    }
    const productImage = req.files.image
    
    if(!productImage.minetype.startsWith('image')) {
        throw new Error('choose an image ONLY!')
    }

    const maxSize = 1024 * 1024;
    if (productImage.size > maxSize){
        throw new Error('image to big')
    }

    const imagePath = path.join(
        __dirname,
        "../public/uploads/",
        productImage.name

        )
        await productImage.mv(imagePath)

        res.status(200).json({image: { src: `/uploads/${productImage.name}`}})

res.send("uploadProductImage")
}

module.exports = {
    uploadProductImage,
}
