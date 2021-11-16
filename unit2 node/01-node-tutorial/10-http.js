const http = require('http')
const os = require('os')
const user = os.userInfo()

const data = {
    Y_O_U:`${user.username}`,
    names:
    ['derek', 'jorden', 'mel'],
    data:'10/20/20',
    number: [1,2,3,4,5,6,7,8]
}


const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        console.log(`${user.username} was here`);
        res.end('wecome to the home page')
    }else if (req.url === '/about') {
        res.end('here is the history of my poeple')
    }else if(req.url === '/data') {
        res.end(JSON.stringify(data))
    } else {
        res.end(`
        <h1> Oops </h1>
        <p>we can't find what you're looking for</p>
        `)
    }
})

server.listen(5000)