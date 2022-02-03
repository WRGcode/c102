require("dotenv").config()
require("express-async-errors");

const express = require("express");
const app = express();
const fileUpload = require('express-fileupload')

const connectDB = require("./DB/connect");

const productRouter = require('./Routes/ProductRouter')

const cloudinary = require('cloudinary').v2
cloudinary.config({ 
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
  });

const notFoundMiddlewere = require("./Middleware/Not-found")
const errorMiddlewere = require("./Middleware/Error-handler");

const port = process.env.PORT || 3001
app.use(express.json())
app.use(fileUpload({useTempFiles: true}))

app.use(express.static('./Public'))

app.get('/', (req, res)=> {
    res.send("<h1>File upload starter</h1>")
})
app.use("/api/v1/products", productRouter)

.use(errorMiddlewere)
.use(notFoundMiddlewere)

const start = async() => {
try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, console.log("listening @ " + port))
} catch (error){
    console.log(error);
}
}

start()
