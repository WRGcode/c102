//basic middleware

//app that listens on port 3000 || .env

//routes to api/v1/

require('dotenv').config()
require('express-async-errors')
const express = require("express");
const app = express();
const routes = require('./routes/login')
const connectDB = require('./db/connect')
const notFoundMiddlewere = require('./middleware/Not-found')
const errorMiddlewere = require('./middleware/error-handler')

app.use(express.static('./public'))
.use([
    express.urlencoded({extended: false}),
    express.json()
])
.use('/api/v1', routes)

.use(errorMiddlewere)
.use(notFoundMiddlewere)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () =>{
            console.log(`server @ ${port}`)
        })
        }catch (error){
            console.log(error);
        }
    }

 
start()