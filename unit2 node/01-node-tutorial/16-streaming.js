const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {
    encoding: 'utf8',
     highWaterMark:10000})

stream.on('data', (result)=>{
    console.log(result);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
})
stream.on('error' ,(err)=>{
    console.log(err);
})