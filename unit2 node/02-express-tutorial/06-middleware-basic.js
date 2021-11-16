const express = require("express");
const app = express();
const auth = require('./middleware/auth')

const logger = require("./middleware/logger")
const morgan = require('morgan') 

app
.use([morgan('tiny'), auth])

.get('/', (req, res) =>{
    res.send('home page')
})

.use([logger, auth])

.get('/about',logger,(req, res) =>{
    res.send('about page')
})
.listen(3000, () => console.log('server is listening'))