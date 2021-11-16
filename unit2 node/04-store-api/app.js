const express = require("express");
const connectDB = require("./db/connect");
const app = express();
require('express-async-errors')
require("dotenv").config();
const connect = require("./db/connect");
const notFound = require("./middleware/not-found");
require("./db/connect");
const errorHandler = require('./middleware/error-handler')
const router = require('./routes/products')

app.use([express.urlencoded({ extended: false }), express.json()])
.get("/", (req, res) => {res.send("<h1>home</h1>");})
.use('/api/v1/products', router)


//error handlers
.use(errorHandler)
.use(notFound)

//define your PORT value on PC using
//CLI => set PORT-#### && node app.js
//now the PORT is aset on the computer .env

//on MAC use
// starter % PORT-#### node ./app.js
//run node and work

const port = process.env.PORT || 3000

const startApp = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`listening @ ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
startApp();
