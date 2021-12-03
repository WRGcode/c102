
const express = require("express");
const app = express();
const sendEmail = require('./controller/sendEmail')

app
    .use(express.json())
    app.use(express.static('./Public'))
    .get('/', (req,res)=>{
        res.send('<h1>Email project</h1><button href="/send">send mail</button>')
    })

    .get('/send', sendEmail)
    .get('/reset')

const port = process.env.PORT || 3000

    const start = async() => {
        try {
            // await connectDB(process.env.MONGO_URL)
            app.listen(port, console.log("listening @ " + port))
        } catch (error){
            console.log(error);
        }
        }
        
        start()