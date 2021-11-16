const http = require('http')

http
    .createServer()
    .on("request", (req, res)=>{
        if (req.url === '/') res.end('wecome')
        else res.end('404')
    })
    // .on('test')
    // .on('load', () =>{
    //     console.log("server is listening");
    // })
    .listen(3000, () =>{
        console.log("server is listening");
    })