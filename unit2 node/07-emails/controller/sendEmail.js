//create a function that return a json succe
const nodemailer = require('nodemailer')
require('dotenv').config

const sendEmail = async (req,res) =>{
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 993,
        auth:{
            user: "gene.watsica80@ethereal.email",
            pass: process.env.MAILERPASS
        }
    })

    let info = await transporter.sendMail({
        to: "blueyeboyreid@gmail.com",
        from: "MySelf@gmail.com",
        replyTo: "somethingelse@gmail.com.",
        subject: "NodeMailer test",
        text:"hello world",
        html: "<h1>HELLO</h1><p>this is a test did it work</p>"
    })

    res.json(info)
}

module.exports = sendEmail
