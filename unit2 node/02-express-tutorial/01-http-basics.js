const http = require('http')

http
.createServer()
.on('request', (req, res)=>{
    
    if (url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(`<h1>home page</h1>`)
        setTimeout(()=>{
            res.end('endded') 
        }, 5000)
       
    }

})
.listen(3000, ()=>{
    console.log('listening');
})