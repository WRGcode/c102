require("dotenv").config()
require("express-async-errors");

const express = require("express");
const app = express();

const stripeController = require('./controllers/stripeCon')

// const connectDB = require("./DB/connect");

// const productRouter = require('./Routes/ProductRouter')

const notFoundMiddlewere = require("./Middleware/Not-found")
const errorMiddlewere = require("./Middleware/Error-handler");

const port = process.env.PORT || 3001
app.use(express.json())
// app.use(fileUpload({useTempFiles: true}))

app.use(express.static('./Public'))

app.get('/', (req, res)=> {
    res.send("<h1>File upload starter</h1>")
})
app.post("/stripe", stripeController)

.use(errorMiddlewere)
.use(notFoundMiddlewere)

const start = async() => {
try {
    // await connectDB(process.env.MONGO_URL)
    app.listen(port, console.log("listening @ " + port))
} catch (error){
    console.log(error);
}
}

start()
