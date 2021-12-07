const resetEmail = async (req, res) => {
    let randCode = [];
    for(let i = 0; i < 10; i++){
      let randy = Math.floor(Math.random() * alphabet.length - 1)
      randCode.push(alphabet[randy])
    }
    randCode = randCode.join('')
    console.log(randCode);
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 993,
      auth: {
        user: 'gene.watsica80@ethereal.email',
        pass: process.env.MAILERPASS
      }
    });
    
    let info = await transporter.sendMail({
      to: 'blueyeboyreid@gmail.com',
      from: 'password reset project',
      replyTo: 'somethingelse@gmail.com',
      subject: 'Reset Password',
      html: `<h1> Here is your reset code </h1><p> Code: <em> ${randCode} </em> or click <a href="localhost:3000/reset/${randCode}/">here</a></p>`
    })
    res.json({info})
}

module.exports = resetEmail