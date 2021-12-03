const  createProduct = async (req, res) => {
    res.send('createProduct')
}

const getAllProducts = async(req, res) =>{
    res.send("getAllProducts")
}

module.exports = {
    createProduct,
    getAllProducts,
}